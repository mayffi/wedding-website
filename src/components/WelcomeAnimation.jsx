import { useRef, useEffect } from 'react'

function WelcomeAnimation() {
  const canvasRef = useRef(null)
  const animFrameRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const W = 720, H = 260
    canvas.width = W * 2
    canvas.height = H * 2
    canvas.style.height = H + 'px'
    ctx.scale(2, 2)

    const confettiPieces = []
    for (let i = 0; i < 60; i++) {
      confettiPieces.push({
        x: Math.random() * W,
        y: Math.random() * H - H,
        w: Math.random() * 6 + 4,
        h: Math.random() * 10 + 6,
        rot: Math.random() * Math.PI * 2,
        rotV: (Math.random() - 0.5) * 0.04,
        vy: Math.random() * 0.6 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        color: ['#B8E8D0', '#FFD6C0', '#D5C8F0', '#FFE0EC', '#C8E8FF'][Math.floor(Math.random() * 5)],
        phase: Math.random() * Math.PI * 2
      })
    }

    const sparkles = []
    const hearts = []
    let ringX = W + 80
    let ringLanded = false
    let ringLandTime = 0

    const eHookX = 490
    const eHookY = 160

    function spawnSparkle() {
      for (let i = 0; i < 12; i++) {
        const a = Math.random() * Math.PI * 2
        const sp = Math.random() * 3 + 1.5
        sparkles.push({ x: eHookX, y: eHookY - 10, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 1, life: 1, size: Math.random() * 4 + 2 })
      }
    }

    function spawnHearts() {
      for (let i = 0; i < 8; i++) {
        const a = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.2
        const sp = Math.random() * 2 + 1
        hearts.push({ x: eHookX, y: eHookY - 10, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 0.5, life: 1, size: Math.random() * 8 + 6 })
      }
    }

    function drawHeart(cx, cy, size, alpha) {
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.fillStyle = '#FF6B9D'
      ctx.beginPath()
      const s = size / 12
      ctx.moveTo(cx, cy + s * 3)
      ctx.bezierCurveTo(cx, cy, cx - s * 5, cy, cx - s * 5, cy - s * 3)
      ctx.bezierCurveTo(cx - s * 5, cy - s * 6, cx, cy - s * 6, cx, cy - s * 3.5)
      ctx.bezierCurveTo(cx, cy - s * 6, cx + s * 5, cy - s * 6, cx + s * 5, cy - s * 3)
      ctx.bezierCurveTo(cx + s * 5, cy, cx, cy, cx, cy + s * 3)
      ctx.fill()
      ctx.restore()
    }

    function drawRing(cx, cy, size) {
      ctx.save()
      ctx.translate(cx, cy)
      const outer = size, inner = size * 0.7
      const grad1 = ctx.createRadialGradient(-size * 0.2, -size * 0.2, inner * 0.5, 0, 0, outer)
      grad1.addColorStop(0, '#FFF4B0')
      grad1.addColorStop(0.3, '#FFD700')
      grad1.addColorStop(0.6, '#DAA520')
      grad1.addColorStop(0.85, '#FFD700')
      grad1.addColorStop(1, '#B8860B')
      ctx.beginPath()
      ctx.arc(0, 0, outer, 0, Math.PI * 2)
      ctx.arc(0, 0, inner, 0, Math.PI * 2, true)
      ctx.fillStyle = grad1
      ctx.fill()
      ctx.lineWidth = 1
      ctx.strokeStyle = '#B8860B'
      ctx.stroke()
      const shineGrad = ctx.createLinearGradient(-outer, -outer, outer * 0.3, -outer * 0.3)
      shineGrad.addColorStop(0, 'rgba(255,255,255,0.5)')
      shineGrad.addColorStop(0.5, 'rgba(255,255,255,0.15)')
      shineGrad.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.beginPath()
      ctx.arc(0, 0, outer, 0, Math.PI * 2)
      ctx.arc(0, 0, inner, 0, Math.PI * 2, true)
      ctx.fillStyle = shineGrad
      ctx.fill()
      ctx.restore()
    }

    function drawText(t) {
      const lines = [
        { text: "Sam & May 26'", y: 75, size: 44, colors: ['#2B508E', '#D1AB6D', '#82AED1'] },
        { text: 'Welcome to our wedsite', y: 170, size: 30, colors: ['#2B508E', '#82AED1', '#D1AB6D', '#6B9BC4'] }
      ]
      lines.forEach(line => {
        const bounce = Math.sin(t * 2 + line.y * 0.01) * 4
        ctx.save()
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.font = `bold ${line.size}px 'Segoe Script','Comic Sans MS','Brush Script MT',cursive`
        const chars = line.text.split('')
        const totalW = ctx.measureText(line.text).width
        let startX = W / 2 - totalW / 2
        chars.forEach((ch, i) => {
          const charBounce = Math.sin(t * 2.5 + i * 0.35) * 5 + bounce
          const col = line.colors[i % line.colors.length]
          ctx.fillStyle = col
          const cw = ctx.measureText(ch).width
          ctx.fillText(ch, startX + cw / 2, line.y + charBounce)
          startX += cw
        })
        ctx.restore()
      })
    }

    function drawSparkle(x, y, size, alpha) {
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.fillStyle = '#FFD700'
      ctx.translate(x, y)
      ctx.beginPath()
      ctx.moveTo(0, -size)
      ctx.quadraticCurveTo(size * 0.15, -size * 0.15, size, 0)
      ctx.quadraticCurveTo(size * 0.15, size * 0.15, 0, size)
      ctx.quadraticCurveTo(-size * 0.15, size * 0.15, -size, 0)
      ctx.quadraticCurveTo(-size * 0.15, -size * 0.15, 0, -size)
      ctx.fill()
      ctx.beginPath()
      for (let i = 0; i < 4; i++) {
        const a = i * Math.PI / 2
        ctx.moveTo(0, 0)
        ctx.lineTo(Math.cos(a) * size * 1.3, Math.sin(a) * size * 1.3)
      }
      ctx.strokeStyle = '#FFD700'
      ctx.lineWidth = 1.5
      ctx.globalAlpha = alpha * 0.7
      ctx.stroke()
      ctx.restore()
    }

    let lastT = 0

    function animate(ts) {
      const t = ts / 1000
      lastT = t

      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#FFFFFF'
      ctx.fillRect(0, 0, W, H)

      confettiPieces.forEach(c => {
        c.y += c.vy
        c.x += c.vx + Math.sin(t + c.phase) * 0.3
        c.rot += c.rotV
        if (c.y > H + 20) { c.y = -20; c.x = Math.random() * W }
        ctx.save()
        ctx.translate(c.x, c.y)
        ctx.rotate(c.rot)
        ctx.fillStyle = c.color
        ctx.globalAlpha = 0.6
        ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h)
        ctx.restore()
      })

      drawText(t)

      if (!ringLanded) {
        ringX -= 2.5
        if (ringX <= eHookX) {
          ringX = eHookX
          ringLanded = true
          ringLandTime = t
          spawnSparkle()
          spawnHearts()
        }
      }

      const ringBob = ringLanded ? Math.sin(t * 3) * 2 : 0
      drawRing(ringX, eHookY - 12 + ringBob, 18)

      if (ringLanded && t - ringLandTime > 4) {
        ringLanded = false
        ringX = W + 80
        sparkles.length = 0
        hearts.length = 0
      }

      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i]
        s.x += s.vx; s.y += s.vy; s.vy += 0.05; s.life -= 0.018
        if (s.life <= 0) { sparkles.splice(i, 1); continue }
        drawSparkle(s.x, s.y, s.size, s.life)
      }
      for (let i = hearts.length - 1; i >= 0; i--) {
        const h = hearts[i]
        h.x += h.vx; h.y += h.vy; h.vy += 0.03; h.life -= 0.012
        if (h.life <= 0) { hearts.splice(i, 1); continue }
        drawHeart(h.x, h.y, h.size, h.life)
      }

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current)
      }
    }
  }, [])

  return (
    <div style={{ width: '100%', position: 'relative', overflow: 'hidden', background: '#fff', borderRadius: '12px' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%' }} />
    </div>
  )
}

export default WelcomeAnimation
