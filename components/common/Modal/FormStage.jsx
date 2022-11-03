import React, { useState } from "react";
import { FaTimes, FaRegQuestionCircle } from "react-icons/fa";
import { PortfolioContext } from "../../../store/context/PortfolioContext";

const initState = {
	firstName: "",
	lastName: "",
	email: "",
	phoneNumber: "",
	location: "Choose your location",
	projectType: "Choose a project type",
	projectName: "",
	domain: false,
	budget: 0,
	delai: null,
	paymentMethod: "Choose a payment method",
};

const FormStage = ({ stage, setStage, hideStage }) => {
	const { closeModal } = PortfolioContext();
	const [inputStates, setInputStates] = useState(initState);

	const inputChangeHandler = (e) => {
		if (e.target.name === "domain") {
			return setInputStates((prev) => ({
				...prev,
				domain: e.target.checked,
			}));
		}

		setInputStates((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const nextStageHandler = (key) => {
		if (key) {
			return stage > 0 && setStage((prev) => prev - 1);
		}

		stage < 3 && setStage((prev) => prev + 1);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		if (stage >= 3) {
			return;
		} else {
			return nextStageHandler();
		}
	};

	return (
		<form className="w-full space-y-4" onSubmit={submitHandler}>
			{stage === 0 && (
				<>
					<div className="w-full flex justify-between gap-x-2">
						{/* first name */}
						<div className="inputWrapper">
							<label htmlFor="firstName">
								First name <RequiredHint />
							</label>
							<input
								required
								type="text"
								id="firstName"
								name="firstName"
								placeholder="First name"
								className="inputForm"
								value={inputStates.firstName}
								onChange={inputChangeHandler}
							/>
						</div>

						{/* last name */}
						<div className="inputWrapper">
							<label htmlFor="lastName">
								Last name <RequiredHint />
							</label>
							<input
								required
								type="text"
								id="lastName"
								name="lastName"
								placeholder="Last name"
								className="inputForm"
								value={inputStates.lastName}
								onChange={inputChangeHandler}
							/>
						</div>
					</div>

					{/* email */}
					<div className="inputWrapper">
						<label htmlFor="email">
							Email address <RequiredHint />
						</label>
						<input
							required
							type="email"
							id="email"
							name="email"
							placeholder="Email address"
							className="inputForm"
							value={inputStates.email}
							onChange={inputChangeHandler}
						/>
					</div>

					{/* phone number */}
					<div className="inputWrapper">
						<label htmlFor="phoneNumber">Phone number</label>
						<input
							type="tel"
							id="phoneNumber"
							name="phoneNumber"
							placeholder="Phone number"
							className="inputForm"
							value={inputStates.phoneNumber}
							onChange={inputChangeHandler}
						/>
					</div>

					{/* location */}
					<div className="inputWrapper">
						<label htmlFor="location">
							Location <RequiredHint />
						</label>
						<select
							required
							name="location"
							id="location"
							defaultValue={inputStates.location}
							className="inputForm"
							onChange={inputChangeHandler}>
							<option value="">Select a country</option>
							<option value="Analamanga">Analamanga</option>
							<option value="Itasy">Itasy</option>
							<option value="Taolaniaro">Taolaniaro</option>
							<option value="Bongolava">Bongolava</option>
							<option value="Saint Marie">Saint Marie</option>
							<option value="Anosy">Anosy</option>
						</select>
					</div>
				</>
			)}

			{stage === 1 && (
				<>
					{/* Project type */}
					<div className="inputWrapper">
						<label htmlFor="projectType">
							Project type <RequiredHint />
						</label>
						<select
							required
							name="projectType"
							id="projectType"
							defaultValue={inputStates.projectType}
							className="inputForm"
							onChange={inputChangeHandler}>
							<option value="">Choose a project type</option>
							<option value="IOS App">IOS App</option>
							<option value="Android App">Android App</option>
							<option value="Web App">Web App</option>
							<option value="Website">Website</option>
							<option value="Dashboard Analityc">
								Dashboard Analityc
							</option>
						</select>
					</div>

					{/* Project name */}
					<div className="inputWrapper">
						<label htmlFor="projectName">Project name</label>
						<input
							type="tel"
							id="projectName"
							name="projectName"
							placeholder="Project name"
							className="inputForm"
							value={inputStates.projectName}
							onChange={inputChangeHandler}
						/>
					</div>

					{/* have domain */}
					<div className="flex items-center space-x-2">
						<input
							type="checkbox"
							name="domain"
							id="domain"
							value={inputStates.domain}
							onChange={inputChangeHandler}
						/>
						<label
							htmlFor="domain"
							className="select-none flex items-center gap-x-2">
							Have domain{" "}
							<FaRegQuestionCircle
								title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat modi eos facere impedit ad vel"
								className="cursor-pointer"
							/>
						</label>
					</div>
				</>
			)}

			{stage === 2 && (
				<>
					{/* Project budget */}
					<div className="inputWrapper">
						<label htmlFor="budget">Budget</label>
						<input
							type="number"
							id="budget"
							name="budget"
							placeholder="Project budget"
							className="inputForm"
							value={inputStates.budget}
							onChange={inputChangeHandler}
						/>
					</div>

					{/* Project delai */}
					<div className="inputWrapper">
						<label htmlFor="delai">
							Delai <RequiredHint />
						</label>
						<input
							required
							type="date"
							id="delai"
							name="delai"
							placeholder="Project delai"
							className="inputForm"
							onChange={inputChangeHandler}
						/>
					</div>

					{/* Payment method */}
					<div className="inputWrapper">
						<label htmlFor="paymentMethod">
							Payment method <RequiredHint />
						</label>
						<select
							required
							name="paymentMethod"
							id="paymentMethod"
							defaultValue={inputStates.paymentMethod}
							className="inputForm"
							onChange={inputChangeHandler}>
							<option value="">Choose a payment method</option>
							<option value="Paypal">Paypal</option>
							<option value="Virement Bancaire">
								Virement Bancaire
							</option>
							<option value="Crypto">Crypto</option>
							<option value="Perfect Money">Perfect Money</option>
						</select>
					</div>
				</>
			)}

			{stage === 3 && (
				<div className="mb-8 space-y-4">
					<h3 className="dark:text-darkColor">
						Thank you {inputStates.email} for your submission, I
						will come back to you ASAP!
					</h3>

					<ol>
						{Object.entries(inputStates).map(([key, value], _) => (
							<li key={key}>
								<u>{key}:</u> &nbsp;
								{value != "" ? (
									<>
										{(typeof value === "number" && value) ||
											(typeof value === "boolean" &&
												value.toString()) ||
											(typeof value === "string" &&
												value)}
									</>
								) : (
									<small>Not specified</small>
								)}
							</li>
						))}
					</ol>
				</div>
			)}

			{stage >= 0 && stage < 3 ? (
				<button className="btn w-full">
					<span className="text-whiteColor dark:text-whiteColor">
						{stage > 1 ? "Submit" : "Next"}
					</span>
				</button>
			) : (
				hideStage && (
					<button
						className="absolute top-[-2rem] right-[-0.5rem] bg-red-500 w-8 h-8 flex items-center justify-center text-lightDarkColor rounded-full cursor-pointer hover:bg-red-300"
						onClick={() => closeModal()}>
						<span className="text-whiteColor dark:text-whiteColor">
							<FaTimes />
						</span>
					</button>
				)
			)}

			{stage > 0 && stage < 3 && (
				<p
					className="text-center text-primaryColor cursor-pointer underline"
					onClick={() => nextStageHandler("back")}>
					Go back
				</p>
			)}

			<small className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
				&copy; 2022. All rights reserved
			</small>
		</form>
	);
};

const RequiredHint = () => {
	return <span className="text-red-500 dark:text-red-500">*</span>;
};

export default FormStage;
