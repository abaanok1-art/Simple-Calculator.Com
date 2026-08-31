import React, { useState, useEffect } from 'react';
import './normalcalculator.css'

const Calculator1 = () => {

    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('0');

    // Numbers
    const numberClick = (number) => {
        const newExpression = expression + number;
        setExpression(newExpression);
        setResult(newExpression);
    };

    // Operators
    const operatorClick = (operator) => {

        if (expression === '') {
            return;
        }

        // Don't allow two operators together
        if (/[+\-*/]$/.test(expression)) {
            const newExpression =
                expression.slice(0, -1) + operator;

            setExpression(newExpression);
            setResult(newExpression);
            return;
        }

        const newExpression = expression + operator;

        setExpression(newExpression);
        setResult(newExpression);
    };

    // Decimal
    const decimalClick = () => {

        const parts = expression.split(/[+\-*/]/);
        const currentNumber = parts[parts.length - 1];

        if (currentNumber.includes('.')) {
            return;
        }

        const newExpression =
            expression === '' || /[+\-*/]$/.test(expression)
                ? expression + '0.'
                : expression + '.';

        setExpression(newExpression);
        setResult(newExpression);
    };

    // AC
    const clearClick = () => {
        setExpression('');
        setResult('0');
    };

    // Backspace
    const backspaceClick = () => {

        if (expression === '') {
            return;
        }

        const newExpression =
            expression.slice(0, -1);

        setExpression(newExpression);
        setResult(newExpression || '0');
    };

    // Calculate
    const equalsClick = () => {

        if (expression === '') {
            return;
        }

        try {

            const answer = Function(
                '"use strict"; return (' + expression + ')'
            )();

            if (!Number.isFinite(answer)) {
                throw new Error();
            }

            const formattedAnswer =
                Number.isInteger(answer)
                    ? String(answer)
                    : String(Number(answer.toFixed(10)));

            setExpression(formattedAnswer);
            setResult(formattedAnswer);

        } catch {
            setExpression('');
            setResult('Error');
        }
    };

    // E
    const eClick = () => {

        let newExpression = expression;

        if (newExpression !== '' && /[0-9.)]$/.test(newExpression)) {
            newExpression += '*';
        }

        newExpression += Math.E;

        setExpression(newExpression);
        setResult(newExpression);
    };

    // Mu
    const muClick = () => {

        let newExpression = expression;

        if (newExpression !== '' && /[0-9.)]$/.test(newExpression)) {
            newExpression += '*';
        }

        newExpression += '0.000001';

        setExpression(newExpression);
        setResult(newExpression);
    };

    // Sin
    const sinClick = () => {

        if (expression === '') {
            return;
        }

        try {

            const number = Function(
                '"use strict"; return (' + expression + ')'
            )();

            const answer =
                Math.sin(number * Math.PI / 180);

            const formattedAnswer =
                Number(answer.toFixed(10));

            setExpression(String(formattedAnswer));
            setResult(String(formattedAnswer));

        } catch {
            setExpression('');
            setResult('Error');
        }
    };

    // Square root
    const sqrtClick = () => {

        if (expression === '') {
            return;
        }

        try {

            const number = Function(
                '"use strict"; return (' + expression + ')'
            )();

            if (number < 0) {
                throw new Error();
            }

            const answer = Math.sqrt(number);

            const formattedAnswer =
                Number.isInteger(answer)
                    ? String(answer)
                    : String(Number(answer.toFixed(10)));

            setExpression(formattedAnswer);
            setResult(formattedAnswer);

        } catch {
            setExpression('');
            setResult('Error');
        }
    };

    // Keyboard support
    useEffect(() => {

        const keyboardClick = (event) => {

            const key = event.key;

            if (key >= '0' && key <= '9') {
                numberClick(key);
            }

            else if (key === '.') {
                decimalClick();
            }

            else if (
                key === '+' ||
                key === '-' ||
                key === '*' ||
                key === '/'
            ) {
                operatorClick(key);
            }

            else if (key === 'Enter' || key === '=') {
                equalsClick();
            }

            else if (key === 'Backspace') {
                backspaceClick();
            }

            else if (key === 'Escape') {
                clearClick();
            }

        };

        window.addEventListener('keydown', keyboardClick);

        return () => {
            window.removeEventListener('keydown', keyboardClick);
        };

    });

    return (
        <>
            <center> <div className='calculator'>

                <div className='outputs'>
                    <h3>{expression || '0'}</h3>
                    <h1>{result}</h1>
                </div>

                <div className='topbtnparentt'>

                    <button
                        className='topbtn'
                        onClick={eClick}
                    >
                        e
                    </button>

                    <button
                        className='topbtn'
                        onClick={muClick}
                    >
                        μ
                    </button>

                    <button
                        className='topbtn'
                        onClick={sinClick}
                    >
                        sin
                    </button>

                    <button
                        className='topbtn'
                        onClick={sqrtClick}
                    >
                        √
                    </button>

                </div>

                <div className='secandtrdrowparent1'>

                    <button
                        className='sectrdrowbtn'
                        onClick={clearClick}
                    >
                        Ac
                    </button>

                    <button
                        className='sectrdrowbtn'
                        onClick={backspaceClick}
                    >
                        ⌫
                    </button>

                    <button
                        className='sectrdrowbtn14'
                        onClick={() => operatorClick('/')}
                    >
                        /
                    </button>

                    <button
                        className='sectrdrowbtn13'
                        onClick={() => operatorClick('*')}
                    >
                        *
                    </button>

                    <button
                        className='sectrdrowbtn1'
                        onClick={() => numberClick('7')}
                    >
                        7
                    </button>

                    <button
                        className='sectrdrowbtn1'
                        onClick={() => numberClick('8')}
                    >
                        8
                    </button>

                    <button
                        className='sectrdrowbtn1'
                        onClick={() => numberClick('9')}
                    >
                        9
                    </button>

                    <button
                        className='sectrdrowbtn12'
                        onClick={() => operatorClick('-')}
                    >
                        -
                    </button>

                </div>

                <div className='frthandfthrowparent1'>

                    <button
                        className='frthfthrowbtn2'
                        onClick={() => numberClick('4')}
                    >
                        4
                    </button>

                    <button
                        className=' frthfthrowbtn2'
                        onClick={() => numberClick('5')}
                    >
                        5
                    </button>

                    <button
                        className='frthfthrowbtn14'
                        onClick={() => numberClick('6')}
                    >
                        6
                    </button>

                    <button
                        className='sidebtn'
                        onClick={() => operatorClick('+')}
                    >
                        +
                    </button>

                    <button
                        className='frthfthrowbtn'
                        onClick={() => numberClick('1')}
                    >
                        1
                    </button>

                    <button
                        className='frthfthrowbtn'
                        onClick={() => numberClick('2')}
                    >
                        2
                    </button>

                    <button
                        className='frthfthrowbtn12'
                        onClick={() => numberClick('3')}
                    >
                        3
                    </button>

                </div>

                <div className='lastrow'>

                    <button
                        className='frstlastrowbtn'
                        onClick={() => numberClick('0')}
                    >
                        0
                    </button>

                    <button
                        className='scndlastrowbtn'
                        onClick={decimalClick}
                    >
                        .
                    </button>

                    <button
                        className='trdlastrowbtn'
                        onClick={equalsClick}
                    >
                        =
                    </button>

                </div>

            </div>
            </center>

        </>
    )
}

export default Calculator1;