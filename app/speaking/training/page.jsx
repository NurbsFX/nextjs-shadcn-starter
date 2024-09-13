import React from 'react';
import { Button } from '../../../components/ui/button';
import { Label } from "../../../components/ui/label"
import { Play } from "lucide-react"

const SpeakingTrainingPage = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Header Section */}
            <header className="text-center mb-12 space-y-4">
                <Label className="text-4xl font-bold">
                    Speaking Section Training
                </Label>
                <br />
                <br />
                <Label className="text-lg text-gray-600 dark:text-gray-300 mt-4">
                    Learn strategies, practice tests, and tips to excel in the Speaking section of the TOEFL iBT.
                </Label>
            </header>

            {/* Form section */}
            <form className="space-y-8">
                {/* Speaking Section Overview */}
                <fieldset className="rounded-lg border p-6 shadow-sm">
                    <legend className="px-2 text-lg font-medium">
                        What is the Speaking Section about?
                    </legend>
                    <div>
                        <Label className="text-base mb-4">
                            The TOEFL iBT Speaking section evaluates the English-speaking proficiency of students whose native language is not English.
                        </Label>
                        <Label className="text-base mt-4">
                            <ul className="mt-4 list-disc list-inside space-y-3 text-sm leading-relaxed">
                                <li>You will answer 4 questions in total.</li>
                                <li>The first question is an Independent Speaking task based on your own opinions and experiences.</li>
                                <li>The next 3 questions are Integrated Speaking tasks, where you listen to or read passages and then respond.</li>
                                <li>You will have 45 or 60 seconds to respond to each question.</li>
                                <li>The Speaking section takes approximately 16 minutes to complete.</li>
                            </ul>
                        </Label>
                    </div>
                </fieldset>

                {/* Evaluation Criteria */}
                <fieldset className="rounded-lg border p-6 shadow-sm">
                    <legend className="px-2 text-lg font-medium">
                        How are Your Responses Evaluated?
                    </legend>
                    <div>
                        <Label className="text-base mb-4">
                            Your responses will be evaluated based on the following three main criteria:
                        </Label>
                        <Label className="text-base mt-4">
                            <ul className="mt-4 list-disc list-inside space-y-3 text-sm leading-relaxed">
                                <li><strong>Delivery:</strong> How clear and natural is your speech? Good responses have clear pronunciation, natural pacing, and fluid delivery.</li>
                                <li><strong>Language Use:</strong> How effectively do you use grammar and vocabulary to express your ideas? Try to demonstrate control over both basic and complex language structures.</li>
                                <li><strong>Topic Development:</strong> How well do you address the question and organize your ideas? Strong responses are coherent, use all or most of the available time, and show logical progression of ideas.</li>
                            </ul>
                        </Label>
                    </div>
                </fieldset>

                {/* Tips for Success in Speaking Section */}
                <fieldset className="rounded-lg border p-6 shadow-sm">
                    <legend className="px-2 text-lg font-medium">
                        How to Succeed in the Speaking Section
                    </legend>
                    <div>
                        <Label className="text-base mb-4">
                            Success in the Speaking section is all about clarity, language use, and topic development. Here are some expert tips:
                        </Label>
                        <Label className="text-base mt-4">
                            <ul className="mt-4 list-disc list-inside space-y-3 text-sm leading-relaxed">
                                <li><strong>Time Your Responses:</strong> Practice giving responses within the 45-60 second time limits.</li>
                                <li><strong>Speak Clearly:</strong> Focus on clear pronunciation and natural intonation.</li>
                                <li><strong>Organize Your Ideas:</strong> Structure your responses with clear reasons and examples to support your opinions.</li>
                                <li><strong>Use Complex Vocabulary:</strong> Try to include a variety of vocabulary and sentence structures to show fluency.</li>
                                <li><strong>Practice Active Listening:</strong> For integrated tasks, focus on understanding both the reading and listening materials before responding.</li>
                            </ul>
                        </Label>
                    </div>
                </fieldset>

            </form>

            {/* Button: Start Test */}
            <div className="flex justify-center mt-10">
                <Button className="px-6 py-3 text-lg font-semibold gap-3">
                    <Play className="size-5" />
                    Start a Speaking Test
                </Button>
            </div>
        </div>
    );
};

export default SpeakingTrainingPage;
