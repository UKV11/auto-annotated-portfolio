import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { DynamicComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import { Action } from '../../atoms';
import { AnnotatedField } from '@/components/Annotated';
import { Button, HeroSection, Link } from '@/types';

export default function HeroSectionComponent(props) {
    return (
        <Section {...props}>
            <div className="text-center">
                <h1 className="text-4xl font-bold">Krishna Vamsi Uppala</h1>
                <h2 className="text-2xl mt-2">Data Analyst | AI Engineer | Cloud Solutions Expert</h2>
                <p className="mt-4 text-lg">
                    Experienced Data Analyst and AI Engineer specializing in Generative AI, NLP, and Cloud AI solutions. Passionate about building AI-driven search engines, deep learning models, and scalable cloud-based solutions.
                </p>
            </div>
        </Section>
    );
}

export function SkillsSection() {
    return (
        <Section>
            <h2 className="text-3xl font-bold text-center">Skills</h2>
            <ul className="mt-4 list-disc pl-5">
                <li><strong>Programming & Query Languages:</strong> Python (Scikit-Learn, TensorFlow), R, SQL</li>
                <li><strong>Machine Learning & AI:</strong> Deep Learning (CNN, RNN, LSTMs), NLP (BERT, GPT, LLaMA, Hugging Face), Computer Vision, OpenAI API</li>
                <li><strong>Data Engineering & Big Data:</strong> ETL Pipelines (SSIS, Airflow, Hadoop), Apache Spark, PostGIS</li>
                <li><strong>Cloud Services:</strong> AWS (S3, Lambda, SageMaker, QuickSight), Azure AI, GCP (BigQuery, Looker)</li>
                <li><strong>Database & CI/CD Tools:</strong> MySQL, PostgreSQL, MongoDB, Docker, Kubernetes, Flask, JIRA, Agile, Git</li>
            </ul>
        </Section>
    );
}

export function ProjectsSection() {
    return (
        <Section>
            <h2 className="text-3xl font-bold text-center">Projects</h2>
            <ul className="mt-4 list-disc pl-5">
                <li><strong>AI-Powered Personalized Marketing System:</strong> Built a real-time recommendation engine using deep learning to optimize customer engagement. Utilized NLP and sentiment analysis to dynamically adjust marketing strategies.</li>
                <li><strong>Crime Data Analytics & FBI API Integration:</strong> Developed a real-time crime hotspot detection system using AWS S3, EC2, PySpark & QuickSight. Integrated FBI API data to build an interactive data visualization tool for law enforcement agencies.</li>
                <li><strong>Real-Time Satellite Image Analysis for Urban Planning:</strong> Built Computer Vision models (CNN, OpenCV) to analyze satellite maps for government planning agencies. Implemented AI-based anomaly detection for identifying unauthorized land use and infrastructure defects.</li>
                <li><strong>Comparative Analysis of Cryptocurrency Returns and Stock Returns:</strong> Built LSTM and SVM models using Python and PyTorch to compare crypto and stock markets through predictive analysis. Analyzed historical trends to generate actionable investment insights.</li>
            </ul>
        </Section>
    );
}

export function ContactSection() {
    return (
        <Section>
            <h2 className="text-3xl font-bold text-center">Contact</h2>
            <p className="text-center mt-2">Get in touch with me:</p>
            <ul className="mt-4 list-none text-center">
                <li><strong>Email:</strong> <a href="mailto:Krishnavamsiuppala@gmail.com" className="text-blue-500">Krishnavamsiuppala@gmail.com</a></li>
                <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/krishnavamsiuppala" className="text-blue-500">linkedin.com/in/krishnavamsiuppala</a></li>
                <li><strong>GitHub:</strong> <a href="https://github.com/krishnavamsiuppala" className="text-blue-500">github.com/krishnavamsiuppala</a></li>
                <li><strong>Phone:</strong> (608) 709-9798</li>
            </ul>
        </Section>
    );
}
