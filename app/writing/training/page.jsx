import React from 'react';
import { Button } from '../../../components/ui/button';
import { Label } from "../../../components/ui/label"
import { Play } from "lucide-react"

const WritingTrainingPage = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Header Section */}
            <header className="text-center mb-12 space-y-4">
                <Label className="text-4xl font-bold">
                    Writing Section Training
                </Label>
                <br />
                <br />
                <Label className="text-lg text-gray-600 dark:text-gray-300 mt-4">
                    Learn strategies, practice tests, and tips to excel in the Writing section of the TOEFL iBT.
                </Label>
            </header>

            {/* Form section */}
            <form className="space-y-8">
                {/* Writing Section Overview */}
                <fieldset className="rounded-lg border p-6 shadow-sm">
                    <legend className="px-2 text-lg font-medium">
                        What is the Writing Section about?
                    </legend>
                    <div>
                        <Label className="text-base mb-4">
                            The TOEFL iBT Writing section consists of two tasks: the Integrated Writing task and the Writing for an Academic Discussion task.
                        </Label>
                        <Label className="text-base mt-4">
                            <ul className="mt-4 list-disc list-inside space-y-3 text-sm leading-relaxed">
                                <li>The Integrated Writing task requires you to summarize points from a lecture and relate them to a reading passage.</li>
                                <li>The Writing for an Academic Discussion task asks you to contribute to a discussion on a given topic.</li>
                                <li>You will have 20 minutes to complete the Integrated Writing task and 10 minutes for the Writing for an Academic Discussion task.</li>
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
                            Your writing will be evaluated based on the following criteria:
                        </Label>
                        <Label className="text-base mt-4">
                            <ul className="mt-4 list-disc list-inside space-y-3 text-sm leading-relaxed">
                                <li><strong>Content and Accuracy:</strong> How well do you summarize key points and address the task? Make sure your response includes all necessary information and accurately reflects the content of the lecture and reading.</li>
                                <li><strong>Organization:</strong> Is your response well-structured? Logical transitions and clear paragraphs are key.</li>
                                <li><strong>Language Use:</strong> Do you use appropriate grammar and vocabulary? Ensure your sentences are grammatically correct and varied.</li>
                                <li><strong>Clarity:</strong> Is your writing clear and easy to follow? Avoid overly complex sentences and focus on precise wording.</li>
                            </ul>
                        </Label>
                    </div>
                </fieldset>

                {/* Tips for Success in Writing Section */}
                <fieldset className="rounded-lg border p-6 shadow-sm">
                    <legend className="px-2 text-lg font-medium">
                        How to Succeed in the Writing Section
                    </legend>
                    <div>
                        <Label className="text-base mb-4">
                            Success in the Writing section depends on effectively summarizing, organizing, and developing your ideas. Here are some expert tips:
                        </Label>
                        <Label className="text-base mt-4">
                            <ul className="mt-4 list-disc list-inside space-y-3 text-sm leading-relaxed">
                                <li><strong>Understand the Task:</strong> For the Integrated Writing task, focus on identifying and explaining the key points from both the reading and the lecture.</li>
                                <li><strong>Organize Your Response:</strong> Use clear paragraph structures to separate your ideas logically and clearly.</li>
                                <li><strong>Develop Your Ideas:</strong> Use examples and explanations to support your main points.</li>
                                <li><strong>Time Management:</strong> Allocate your time effectively—plan, write, and review your response within the given time limits.</li>
                            </ul>
                        </Label>
                    </div>
                </fieldset>

            </form>

            {/* Button: Start Test */}
            <div className="flex justify-center mt-10">
                <Button className="px-6 py-3 text-lg font-semibold gap-3">
                    <Play className="size-5" />
                    Start a Writing Test
                </Button>
            </div>
        </div>
    );
};

export default WritingTrainingPage;
