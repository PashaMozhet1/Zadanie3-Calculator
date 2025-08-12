// import './App.css';
import { useState } from 'react';
import styles from './App.module.css';

const numbers = [
	{ id: '000', value: 0 },
	{ id: '001', value: 1 },
	{ id: '002', value: 2 },
	{ id: '003', value: 3 },
	{ id: '004', value: 4 },
	{ id: '005', value: 5 },
	{ id: '006', value: 6 },
	{ id: '007', value: 7 },
	{ id: '008', value: 8 },
	{ id: '009', value: 9 },
];

const operations = [
	{ id: 'plus', value: '+', onCLick: `plusButton` },
	{ id: 'minus', value: '-', onCLick: `minusButton` },
	{ id: 'equal', value: '=', onCLick: `equalButton` },
	{ id: 'cancel', value: 'C', onCLick: `cancelButton` },
];

export function App() {
	const [currentDigit, setCurrentDigit] = useState('');
	const [secondDigit, setSecondDigit] = useState('');
	const [operator, setOperator] = useState('');
	const [total, setTotal] = useState('');

	const plusButton = () => {
		setOperator('+');
	};

	const minusButton = () => {
		setOperator('-');
	};

	const equalButton = () => {
		if (operator === '+') {
			setTotal(Number(currentDigit) + Number(secondDigit));
		} else {
			setTotal(Number(currentDigit) - Number(secondDigit));
		}
	};

	const cancelButton = () => {
		setCurrentDigit('');
		setSecondDigit('');
		setOperator('');
		setTotal('');
		console.log('cancel');
	};

	const functions = [plusButton, minusButton, equalButton, cancelButton];

	// const digitButton = (value) => setCurrentDigit(numbers[value]);

	// А если сделать два стейта:
	// 1. Текущее введённое значение
	// 2. Значение после нажатия на кнопку равно (=)
	// В отображение выводить тернарным оператором: если кнопка равно нажата, то выводить Тотал, если не нажата, то выводить текущее

	return (
		<>
			<div className={styles.textarea}>
				{total === '' && (
					<form>
						{currentDigit} {operator} {secondDigit}
					</form>
				)}
				{total && <form className={styles.equal}>{total}</form>}
			</div>
			<div>
				<ul className={styles['operation-buttons']}>
					{operations.map(({ id, value }, index) => (
						<button
							key={id}
							className={styles.button + (id === 'cancel' ? ' ' + styles['button-cancel'] : '')}
							onClick={functions[index]}
						>
							{value}
						</button>
					))}
				</ul>

				<ul className={styles['number-buttons']}>
					{numbers.map(({ id, value }) => {
						return (
							<button
								key={id}
								className={styles.button + (value === 0 ? ' ' + styles['button-zero'] : '')}
								onClick={
									operator
										? () => setSecondDigit(secondDigit.concat(value))
										: () => setCurrentDigit(currentDigit.concat(value))
								}
							>
								{value}
							</button>
						);
					})}
				</ul>
			</div>
		</>
	);
}

// export function App() {
// 	return (
// 		<>
// 			<div className={styles.textarea}>
// 				<text className={styles.text}>1234567</text>
// 			</div>
// 			<div className={styles.calculator}>
// 				<div className={styles['operation-buttons']}>
// 					<button className={styles.button} onClick={plusButton}>
// 						+
// 					</button>
// 					<button className={styles.button} onClick={minusButton}>
// 						–
// 					</button>
// 					<button className={styles.button} onClick={equalButton}>
// 						=
// 					</button>
// 					<button className={styles.button} onClick={cancelButton}>
// 						C
// 					</button>
// 				</div>
// 				<ul>
// 					{numbers.map(({ id, value }, index) => {
// 						return (
// 							<button key={id} className={styles.button}>
// 								{value}
// 							</button>
// 						);
// 					})}
// 				</ul>
// 			</div>
// 		</>
// 	);
// }

/* <div className={styles['operation-buttons']}>
	<button className={styles.button + ' ' + styles['button-cancel']} onClick={cancelButton}>
		C
	</button>
	<button className={styles.button} onClick={plusButton}>
		+
	</button>
	<button className={styles.button} onClick={minusButton}>
		–
	</button>
	<button className={styles.button} onClick={equalButton}>
		=
	</button>
</div>; */
