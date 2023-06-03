import React, { useState } from 'react';
import {
    makeStyles,
    Typography,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@material-ui/core';
import { QuestionType, Question, QuestionDifficulty } from '../components/QuestionTypes';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    heading: {
        marginBottom: theme.spacing(4),
    },
    form: {
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
    },
    submitButton: {
        alignSelf: 'flex-end',
    },
}));

const QuestionCenter: React.FC = () => {
    const classes = useStyles();
    const [questionType, setQuestionType] = useState<QuestionType>(QuestionType.FreeResponse);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [difficulty, setDifficulty] = useState<QuestionDifficulty>(QuestionDifficulty.Small);
    const [pictures, setPictures] = useState<File[]>([]);

    const handleQuestionTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setQuestionType(event.target.value as QuestionType);
    };

    const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuestion(event.target.value);
    };

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
    };

    const handleDifficultyChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setDifficulty(event.target.value as QuestionDifficulty);
    };

    const handlePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedFiles = Array.from(event.target.files);
            setPictures(selectedFiles);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Create the question object based on the selected question type
        const newQuestion: Question = {
            text: question,
            type: questionType,
            correctAnswer: answer,
            difficulty,
            pictures,
        };
        // Handle form submission, e.g., send the newQuestion object to an API
        console.log('New Question:', newQuestion);
        // Reset the form
        setQuestionType(QuestionType.FreeResponse);
        setQuestion('');
        setAnswer('');
        setDifficulty(QuestionDifficulty.Small);
        setPictures([]);
    };

    return (
        <div className={classes.root}>
            <Typography variant="h3" className={classes.heading}>
                Question Center
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <FormControl variant="outlined">
                    <InputLabel id="question-type-label">Question Type</InputLabel>
                    <Select
                        labelId="question-type-label"
                        value={questionType}
                        onChange={handleQuestionTypeChange}
                        label="Question Type"
                    >
                        <MenuItem value={QuestionType.FreeResponse}>Free Response</MenuItem>
                        <MenuItem value={QuestionType.Binary}>Binary</MenuItem>
                        <MenuItem value={QuestionType.List}>List</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    label="Question"
                    variant="outlined"
                    value={question}
                    onChange={handleQuestionChange}
                />
                <TextField
                    label="Answer"
                    variant="outlined"
                    value={answer}
                    onChange={handleAnswerChange}
                />
                <FormControl variant="outlined">
                    <InputLabel id="difficulty-label">Difficulty</InputLabel>
                    <Select
                        labelId="difficulty-label"
                        value={difficulty}
                        onChange={handleDifficultyChange}
                        label="Difficulty"
                    >
                        <MenuItem value={QuestionDifficulty.Small}>Small</MenuItem>
                        <MenuItem value={QuestionDifficulty.Medium}>Medium</MenuItem>
                        <MenuItem value={QuestionDifficulty.Large}>Large</MenuItem>
                    </Select>
                </FormControl>
                <input type="file" multiple onChange={handlePictureChange} />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submitButton}
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default QuestionCenter;

