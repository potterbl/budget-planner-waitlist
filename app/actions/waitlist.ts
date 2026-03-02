'use server'

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
