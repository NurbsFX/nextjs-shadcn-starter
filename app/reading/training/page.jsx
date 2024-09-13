import React from 'react';
import { Button } from '../../../components/ui/button';
import { Label } from "../../../components/ui/label"
import { Play } from "lucide-react"

const ReadingTrainingPage = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Header Section */}
            <header className="text-center mb-12 space-y-4">
                <Label className="text-4xl font-bold">
                    Reading Section Training
                </Label>
                <br />
                <br />
                <Label className="text-lg text-gray-600 dark:text-gray-300 mt-4">
                    Learn strategies, practice tests, and tips to ace the Reading section of the TOEFL iBT.
                </Label>
            </header>


            {/* Form section */}
            <form className="space-y-8">
                <fieldset className="rounded-lg border p-6 shadow-sm">
                    <legend className="px-2 text-lg font-medium">
                        What is the Reading Section about?
                    </legend>
                    <div>
                        <Label className="text-base mb-4">
                            The TOEFL iBT Reading section challenges your comprehension with:
                        </Label>
                        <Label className="text-base mt-4">
                            <ul className="mt-4 list-disc list-inside space-y-3 text-sm leading-relaxed">
                                <li>Two passages of approximately 700 words each.</li>
                                <li>Ten questions per passage.</li>
                                <li>You have 36 minutes to complete the section.</li>
                                <li>Questions can be skipped and answered later.</li>
                            </ul>
                        </Label>
                    </div>
                </fieldset>

                <fieldset className="rounded-lg border p-6 shadow-sm">
                    <legend className="px-2 text-lg font-medium">
                        How to Succeed in the Reading Section
                    </legend>
                    <div>
                        <Label className="text-base mb-4">
                            Success in the Reading section is all about strategy and time management. Here are some expert tips to help you perform at your best:
                        </Label>
                        <Label className="text-base mt-4">
                            <ul className="mt-4 list-disc list-inside space-y-3 text-sm leading-relaxed">
                                <li><strong>Skim First:</strong> Quickly skim the passages to get a general understanding before diving into the questions.</li>
                                <li><strong>Focus on Key Details:</strong> Pay attention to the main ideas and details that directly support the text.</li>
                                <li><strong>Don't Dwell:</strong> If you get stuck on a difficult question, move on and return to it later.</li>
                                <li><strong>Practice Regularly:</strong> The more you practice with similar passages, the faster and more accurate you'll become.</li>
                            </ul>
                        </Label>
                    </div>
                </fieldset>

            </form>

            {/* Button: Start Test */}
            <div className="flex justify-center mt-10">
                <Button className="px-6 py-3 text-lg font-semibold gap-3">
                    <Play className="size-5" />
                    Start a Reading Test
                </Button>
            </div>
        </div>
    );
};

export default ReadingTrainingPage;
