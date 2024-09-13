import React from 'react';
import { Button } from '../../../components/ui/button';
import { Label } from "../../../components/ui/label";
import { Play } from "lucide-react"

const ListeningTrainingPage = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Header Section */}
            <header className="text-center mb-12 space-y-4">
                <Label className="text-4xl font-bold">
                    Listening Section Training
                </Label>
                <br />
                <br />
                <Label className="text-lg text-gray-600 dark:text-gray-300 mt-4">
                    Learn strategies, practice tests, and tips to excel in the Listening section of the TOEFL iBT.
                </Label>
            </header>

            {/* Form section */}
            <form className="space-y-8">
                {/* Listening Section Overview */}
                <fieldset className="rounded-lg border p-6 shadow-sm">
                    <legend className="px-2 text-lg font-medium">
                        What is the Listening Section about?
                    </legend>
                    <div>
                        <Label className="text-base mb-4">
                            The TOEFL iBT Listening section assesses your ability to understand spoken English in academic settings.
                        </Label>
                        <Label className="text-base mt-4">
                            <ul className="mt-4 list-disc list-inside space-y-3 text-sm leading-relaxed">
                                <li>You will listen to three lectures and two conversations.</li>
                                <li>There will be six questions per lecture and five questions per conversation.</li>
                                <li>The Listening section takes approximately 36 to 41 minutes to complete.</li>
                            </ul>
                        </Label>
                    </div>
                </fieldset>

                {/* Strategies for Succeeding in the Listening Section */}
                <fieldset className="rounded-lg border p-6 shadow-sm">
                    <legend className="px-2 text-lg font-medium">
                        Strategies for Succeeding in the Listening Section
                    </legend>
                    <div>
                        <Label className="text-base mb-4">
                            To succeed in the Listening section, it is essential to develop good listening habits and techniques. Here are some key strategies:
                        </Label>
                        <Label className="text-base mt-4">
                            <ul className="mt-4 list-disc list-inside space-y-3 text-sm leading-relaxed">
                                <li><strong>Practice Active Listening:</strong> Focus on the content, not the speaker's style. Ask yourself questions about the main ideas and key details while listening.</li>
                                <li><strong>Anticipate the Information:</strong> Try to predict what will be said next as a way to stay engaged.</li>
                                <li><strong>Take Notes:</strong> While listening, jot down the main ideas, major points, and key details.</li>
                                <li><strong>Listen for Connections:</strong> Pay attention to words and phrases that indicate the structure of the lecture, such as cause/effect, compare/contrast, and examples.</li>
                                <li><strong>Expand Your Vocabulary:</strong> Increase your knowledge of academic vocabulary by reading and listening to material from a variety of subject areas.</li>
                                <li><strong>Listen for Pragmatic Understanding:</strong> Consider what each speaker is trying to accomplish—are they apologizing, suggesting, or explaining?</li>
                                <li><strong>Connect Ideas:</strong> Listen for the relationships between ideas—cause/effect, comparison, or steps in a process.</li>
                                <li><strong>Practice Note-Taking:</strong> Focus on writing down significant points while listening, and use your notes to review key information.</li>
                            </ul>
                        </Label>
                    </div>
                </fieldset>
            </form>

            {/* Button: Start Test */}
            <div className="flex justify-center mt-10">
                <Button className="px-6 py-3 text-lg font-semibold gap-3">
                    <Play className="size-5" />
                    Start a Listening Test
                </Button>
            </div>
        </div>
    );
};

export default ListeningTrainingPage;
