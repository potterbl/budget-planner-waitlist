'use server'

async function sendTelegramMessage(name: string, email: string, messenger?: string) {
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('Telegram credentials not configured')
    return false
  }

  const message = `🎯 Новая заявка на waitlist!

👤 Имя: ${name}
📧 Email: ${email}
💬 Мессенджер: ${messenger || 'Не указан'}`

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    })

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.status}`)
    }

    return true
  } catch (error) {
    console.error('Failed to send Telegram message:', error)
    return false
  }
}

export async function submitWaitlistForm(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const messenger = formData.get('messenger') as string

  // Basic validation
  if (!name || !email) {
    return {
      success: false,
      message: 'Name and email are required.'
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'Please enter a valid email address.'
    }
  }

  try {
    // Here you would typically save to a database or send to an API
    // For now, we'll just simulate a successful submission
    console.log('Waitlist submission:', { name, email, messenger })

    // Send Telegram message
    const telegramSent = await sendTelegramMessage(name, email, messenger)

    if (telegramSent) {
      console.log('Telegram notification sent successfully')
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return {
      success: true,
      message: 'Welcome to the waitlist! We\'ll notify you when we launch.'
    }
  } catch (error) {
    console.error('Waitlist submission error:', error)
    return {
      success: false,
      message: 'Something went wrong. Please try again.'
    }
  }
}
