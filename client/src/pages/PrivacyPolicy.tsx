import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import MobileCallButton from "@/components/MobileCallButton";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-8" data-testid="text-privacy-title">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: December 2025</p>

            <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Smile Craft Dental ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect information about you in a variety of ways, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you voluntarily provide when requesting an appointment or contacting us.</li>
                  <li><strong>Appointment Information:</strong> Preferred dates, times, and reasons for your visit to help us schedule your care.</li>
                  <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, and pages visited.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Schedule and confirm appointments</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send appointment reminders and follow-up communications</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Protection of Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our website uses HTTPS encryption to secure data transmission. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Disclosure of Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>With your consent</li>
                  <li>To comply with legal requirements or respond to lawful requests</li>
                  <li>To protect our rights, privacy, safety, or property</li>
                  <li>With service providers who assist in our operations (subject to confidentiality agreements)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us. To exercise these rights, please contact us using the information below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can set your browser to refuse cookies, but some features of our website may not function properly without them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold">Smile Craft Dental</p>
                  <p className="text-muted-foreground">34-36 Progress Street, Suite B6</p>
                  <p className="text-muted-foreground">Edison, NJ 08820</p>
                  <p className="text-muted-foreground">Phone: (908) 481-4882</p>
                  <p className="text-muted-foreground">Email: info@smilecraftdental.com</p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <LiveChat />
      <MobileCallButton />
    </div>
  );
}
