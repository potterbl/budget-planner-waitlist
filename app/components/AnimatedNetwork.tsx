'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedNetworkProps {
  nodeCount?: number
  opacity?: number
}

export function AnimatedNetwork({ nodeCount = 25, opacity = 0.15 }: AnimatedNetworkProps) {
  const [nodes, setNodes] = useState<Array<{
    id: number
    x: number
    y: number
    vx: number
    vy: number
  }>>([])

  useEffect(() => {
    // Generate random nodes
    const initialNodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }))
    setNodes(initialNodes)

    // Animate nodes
    const interval = setInterval(() => {
      setNodes(prevNodes =>
        prevNodes.map(node => ({
          ...node,
          x: node.x + node.vx,
          y: node.y + node.vy,
          vx: node.x <= 0 || node.x >= window.innerWidth ? -node.vx : node.vx,
          vy: node.y <= 0 || node.y >= window.innerHeight ? -node.vy : node.vy,
        }))
      )
    }, 50)

    return () => clearInterval(interval)
  }, [nodeCount])

  const connections = nodes.flatMap((node, i) =>
    nodes.slice(i + 1).map((otherNode, j) => {
      const distance = Math.sqrt(
        Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
      )
      return distance < 150 ? { node, otherNode, distance } : null
    }).filter(Boolean)
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full" style={{ opacity }}>
        {/* Render connections */}
        {connections.map((connection, i) => (
          <motion.line
            key={i}
            x1={connection?.node.x}
            y1={connection?.node.y}
            x2={connection?.otherNode.x}
            y2={connection?.otherNode.y}
            stroke="currentColor"
            strokeWidth="0.5"
            color="var(--foreground)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            style={{
              opacity: connection ? 1 - connection.distance / 150 : 0
            }}
          />
        ))}

        {/* Render nodes */}
        {nodes.map(node => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r="2"
            fill="currentColor"
            color="var(--foreground)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: node.id * 0.1 }}
          />
        ))}
      </svg>
    </div>
  )
}
