// app/api/contact/route.js - Gmail version
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        // Extract form data from request
        const body = await request.json();
        const { name, email, phone, service, message } = body;

        console.log("Received form submission:", { name, email, service });

        // Configure nodemailer with Gmail
        // In your contact/route.js file, change:
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_SERVER_USER,     // Changed from EMAIL_USER
                pass: process.env.EMAIL_SERVER_PASSWORD, // Changed from EMAIL_APP_PASSWORD
            },
        });

        // Format service selection
        let serviceText = '';
        if (service) {
            const serviceMap = {
                'hospital': 'Hospital Care',
                'home': 'Home Care',
                'elder': 'Elder Care',
                'post-surgery': 'Post-Surgery Care',
                'chronic': 'Chronic Disease Management',
                'palliative': 'Palliative Care',
                'other': 'Other Services'
            };
            serviceText = serviceMap[service] || service;
        }

        // Email content
        const mailOptions = {
            from: `"Jay Shankar Nursing Bureau" <${process.env.EMAIL_USER}>`,
            to: "jayshankarnursingbureau@gmail.com",
            replyTo: email,  // So replies go back to the person who filled the form
            subject: `New Contact Form Submission from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Service: ${serviceText || 'Not specified'}
        
        Message:
        ${message}
      `,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #3b82f6; margin-top: 0;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Service:</strong> ${serviceText || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f7fafc; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent:", info.messageId);

        // Return success response
        return NextResponse.json({
            message: 'Email sent successfully!'
        }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { message: 'Failed to send email', error: error.message },
            { status: 500 }
        );
    }
}