import React from 'react';
import { Button } from '@/components/ui/button';

const ReadingTrainingPage = () => {
    return (
        <div className="p-6 space-y-12">
            {/* Header */}
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100">Reading Analytics</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Track your progress and performance in the Reading section.
                    Dive into detailed metrics and enhance your understanding with targeted practice.
                </p>
            </div>

            {/* Section Description */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">What is the Reading Section about?</h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
                    The TOEFL iBT Reading section challenges your comprehension with:
                </p>
                <ul className="list-disc list-inside space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <li>Two passages of approximately 700 words each.</li>
                    <li>Ten questions per passage.</li>
                    <li>You have 36 minutes to complete the section.</li>
                    <li>Questions can be skipped and answered later.</li>
                </ul>
            </div>

            {/* Key Features Section */}
            <div className="bg-blue-100 dark:bg-blue-900 p-8 rounded-lg shadow-md text-blue-900 dark:text-blue-200 space-y-6">
                <h2 className="text-3xl font-semibold">How to Succeed in the Reading Section</h2>
                <p className="text-sm">
                    Success in the Reading section is all about strategy and time management. Here are some expert tips to help you perform at your best:
                </p>
                <ul className="list-disc list-inside space-y-4 text-sm">
                    <li><strong>Skim First:</strong> Quickly skim the passages to get a general understanding before diving into the questions.</li>
                    <li><strong>Focus on Key Details:</strong> Pay attention to the main ideas and details that directly support the text.</li>
                    <li><strong>Don't Dwell:</strong> If you get stuck on a difficult question, move on and return to it later.</li>
                    <li><strong>Practice Regularly:</strong> The more you practice with similar passages, the faster and more accurate you'll become.</li>
                </ul>
            </div>

            {/* Call to Action */}
            <div className="bg-green-50 dark:bg-green-900 p-8 rounded-lg shadow-md text-green-800 dark:text-green-200 space-y-6">
                <h2 className="text-3xl font-semibold">Ready to Test Your Skills?</h2>
                <p className="text-sm">
                    Now that you know what to expect, it's time to put your skills to the test. Click the button below to begin your practice test and start improving your reading comprehension.
                </p>
                <div className="flex justify-center">
                    <Button className="px-8 py-4 text-lg font-semibold bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
                        Start a Reading Test
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ReadingTrainingPage;
