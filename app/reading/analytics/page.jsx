import React from 'react';
import { Button } from '@/components/ui/button'; // Assurez-vous d'importer votre composant Button

const ReadingAnalyticsPage = () => {

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Analytics Page</h1>
            <p className="mb-8">Welcome to the analytics page. Here you can view various metrics and data.</p>

            {/* Explication de l'épreuve de Reading */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-semibold mb-4">En quoi consiste l'épreuve de Reading ?</h2>
                <p className="text-lg">
                    La section Reading du TOEFL iBT comprend deux passages de lecture, chacun faisant
                    environ 700 mots. Il y a dix questions par passage. Vous aurez jusqu'à 36 minutes pour
                    lire les deux passages et répondre à toutes les questions de la section.
                    Dans la section Reading, vous pouvez passer des questions et y revenir plus tard, à condition
                    de répondre à toutes les questions avant que le temps ne soit écoulé.
                </p>
            </div>

            {/* Bouton pour commencer un test */}
            <div className="flex justify-center">
                <Button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
                    Commencer un test
                </Button>
            </div>
        </div>
    );
};

export default ReadingAnalyticsPage;
