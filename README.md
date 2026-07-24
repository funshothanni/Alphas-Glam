# Alpha's Glam 💄

Alpha's Glam is a modern full-stack makeup booking website built with Next.js for a freelance makeup artist. Customers can browse services, submit appointment requests, and receive automated confirmation emails, while the business owner receives booking notifications.

The project is deployed on Vercel and uses Resend for transactional emails.

**Live Demo:**
https://alphasglam.com
---

## Features

- ✨ Responsive landing page
- 💄 Services page with pricing
- 📅 Appointment booking form
- 📧 Automatic booking confirmation emails
- 📬 Admin notification emails
- 📋 Terms & Conditions page
- 🌐 Custom domain support
- ⚡ Fast deployment with Vercel

---

## Tech Stack

### Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

### Backend

- Next.js API Routes
- Resend Email API

### Deployment

- Vercel
- Porkbun (Domain Registration)

---

## Project Structure

```
app/
├── admin/
├── api/
│   ├── send-confirmation/
│   └── send-notification/
├── policy/
├── services/
└── page.tsx

components/
├── BookingForm.tsx
├── Contact.tsx
├── Hero.tsx
├── NavBar.tsx
├── ServiceCard.tsx
└── Services.tsx
```

---

## Installation

Clone the repository.

```bash
git clone https://github.com/funshothanni/alphas-glam.git
```

Move into the project.

```bash
cd alphas-glam
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

---

## Environment Variables

Create a `.env.local` file.

```env
RESEND_API_KEY=your_resend_api_key
```

---

## Email Functionality

The application sends two transactional emails whenever a booking is submitted:

### Customer

- Booking confirmation
- Appointment details
- Deposit instructions
- Preparation guidelines

### Business Owner

- New booking notification
- Customer information
- Requested service
- Date and time

Emails are powered by **Resend** using a verified custom domain.

---

## Deployment

Production deployment is handled by **Vercel**.

The custom domain is managed through **Porkbun** and connected to Vercel using DNS records.

---

## Future Improvements

- Secure admin authentication
- Booking approval workflow
- Calendar integration
- Online payments
- Database persistence
- Appointment availability checking
- Customer booking history
- SMS reminders

---

## Screenshots


---

## Author

**Obafunsho Thanni**

GitHub: https://github.com/YOUR_USERNAME

---

## License

This project is for portfolio and educational purposes.
