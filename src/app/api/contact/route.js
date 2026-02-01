import { submitContact } from '../../../../lib/sanity.client';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, inquiryType, message } = body;

    // Validate required fields
    if (!name || !email || !message || !service) {
      return Response.json(
        { error: 'Name, email, service, and message are required' },
        { status: 400 }
      );
    }

    // Submit to Sanity
    const result = await submitContact({
      name,
      email,
      phone: phone || '',
      service,
      inquiryType: inquiryType || 'quote',
      message,
    });

    return Response.json(
      { success: true, data: result },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
