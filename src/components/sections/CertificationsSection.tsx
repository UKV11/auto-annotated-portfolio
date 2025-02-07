import * as React from 'react';
import section from '@/components/sections/section';  // Ensure this path is correct

export function CertificationsSection() {
    return (
        <section>
            <h2 className="text-3xl font-bold text-center">Certifications</h2>
            <ul className="mt-4 list-disc pl-5">
                <li><strong>Google Advanced Data Analytics</strong> - Google</li>
                <li><strong>Intermediate Python</strong> - DataCamp</li>
                <li><strong>Azure AI Fundamentals</strong> - Microsoft</li>
            </ul>
        </section>  {/* ✅ Ensure this closing tag exists */}
    );
}

export default CertificationsSection;
