import * as React from 'react';
import section from '@/components/sections/section';  // Ensure correct path

export function CertificationsSection() {
    return (
        <section>
            <h2 className="text-3xl font-bold text-center">Certifications</h2>
            <ul className="mt-4 list-disc pl-5">
                <li><strong>Google Advanced Data Analytics</strong> - Google</li>
                <li><strong>Intermediate Python</strong> - DataCamp</li>
                <li><strong>Azure AI Fundamentals</strong> - Microsoft</li>
            </ul>  {/* ✅ Ensure this <ul> is properly closed */}
        </section>  {/* ✅ Ensure <Section> is properly closed */}
    );  {/* ✅ Ensure the return statement is properly closed */}
}

export default CertificationsSection;
