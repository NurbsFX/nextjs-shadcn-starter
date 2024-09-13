import React from "react";
import {
    PenTool,
    PieChart,
    ClipboardList,
    MessageSquare,
    CheckCircle,
} from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "../../..//components/ui/card";
import { Progress } from "../../..//components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../..//components/ui/tabs";
import { Button } from "../../..//components/ui/button";

const WritingAnalyticsDashboard = () => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Header Section */}
            <header className="text-center mb-12 space-y-4">
                <h1 className="text-4xl font-bold">Writing Section Analytics</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Track your progress, see detailed insights from your recent writing sessions, and get personalized feedback.
                </p>
            </header>

            {/* Tabs for navigation between "Sessions", "Progress", and "Feedback" */}
            <Tabs defaultValue="sessions">
                <div className="flex justify-center">
                    <TabsList className="mb-6 flex justify-center gap-4 max-w-[350px]">
                        <TabsTrigger value="sessions">Recent Sessions</TabsTrigger>
                        <TabsTrigger value="progress">Progress</TabsTrigger>
                        <TabsTrigger value="feedback">Feedback</TabsTrigger>
                    </TabsList>
                </div>

                {/* Recent Sessions Overview */}
                <TabsContent value="sessions">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="col-span-1">
                            <CardHeader className="pb-3">
                                <CardTitle>Session 1: July 15, 2023</CardTitle>
                                <CardDescription className="text-sm">
                                    Writing an independent essay
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-sm">
                                <ul>
                                    <li>Score: 24/30</li>
                                    <li>Word Count: 350 words</li>
                                    <li>Time Spent: 45 minutes</li>
                                </ul>
                                <Progress value={80} className="mt-3" />
                            </CardContent>
                        </Card>

                        <Card className="col-span-1">
                            <CardHeader className="pb-3">
                                <CardTitle>Session 2: July 20, 2023</CardTitle>
                                <CardDescription className="text-sm">
                                    Integrated writing task (reading + listening)
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-sm">
                                <ul>
                                    <li>Score: 27/30</li>
                                    <li>Word Count: 300 words</li>
                                    <li>Time Spent: 40 minutes</li>
                                </ul>
                                <Progress value={90} className="mt-3" />
                            </CardContent>
                        </Card>

                        <Card className="col-span-1">
                            <CardHeader className="pb-3">
                                <CardTitle>Session 3: July 25, 2023</CardTitle>
                                <CardDescription className="text-sm">
                                    Writing a persuasive essay
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-sm">
                                <ul>
                                    <li>Score: 26/30</li>
                                    <li>Word Count: 380 words</li>
                                    <li>Time Spent: 50 minutes</li>
                                </ul>
                                <Progress value={87} className="mt-3" />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Progress Overview */}
                <TabsContent value="progress">
                    <Card>
                        <CardHeader>
                            <CardTitle>Overall Writing Progress</CardTitle>
                            <CardDescription className="text-sm">
                                Track your performance and improvements over time.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-center items-center">
                            Mettre un graphique
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle>Writing Accuracy</CardTitle>
                            </CardHeader>
                            <CardContent className="flex justify-between">
                                <div>
                                    <p>Current: 85%</p>
                                    <p>Goal: 90%</p>
                                </div>
                                <Progress value={85} className="w-full mt-2" />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle>Average Word Count</CardTitle>
                            </CardHeader>
                            <CardContent className="flex justify-between">
                                <div>
                                    <p>Current: 340 words</p>
                                    <p>Goal: 400 words</p>
                                </div>
                                <PieChart className="w-8 h-8" />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Feedback Section */}
                <TabsContent value="feedback">
                    <Card>
                        <CardHeader>
                            <CardTitle>Personalized Feedback</CardTitle>
                            <CardDescription className="text-sm">
                                AI-generated feedback based on your recent performance.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-sm text-muted-foreground">
                                <p>
                                    <strong>Strengths:</strong> You demonstrated clear organization and strong argumentation skills in your essays, particularly in persuasive writing.
                                </p>
                                <p className="mt-4">
                                    <strong>Areas for Improvement:</strong> Focus on improving the variety of sentence structures and transitions between ideas.
                                </p>
                                <p className="mt-4">
                                    <strong>Recommended Practice:</strong> Review sessions focusing on enhancing coherence and flow between paragraphs, and aim to incorporate more complex sentences.
                                </p>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                            <Button>
                                <MessageSquare className="mr-2 h-4 w-4" /> Get More Tips
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>

        </div>
    );
};

export default WritingAnalyticsDashboard;
