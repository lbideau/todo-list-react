import React from "react";
import { useState } from "react";
import { homeStyle } from "./style";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tareas, setTareas] = useState([]);
	let nuevoValorTareas = tareas.map(function(item, index) {
		return (
			<li key={index}>
				{item}
				<i
					className="fa fa-trash"
					onClick={event => deleteTodo(index)}
					aria-hidden="true"></i>
			</li>
		);
	});

	const deleteTodo = position => {
		var newList = tareas.filter((tarea, index) => index !== position);
		setTareas(newList);
		
	};

	return (
		<React.Fragment>
			<div className="container">
				<span>todos</span>
				<div className="row">
					<input
						type="text"
						placeholder="Whats needs to be done?"
						onKeyPress={event =>
							event.key === "Enter" &&
							setTareas([...tareas, event.target.value])
						}
					/>
				</div>
				<div className="row">
					<ul>{nuevoValorTareas}</ul>
					<div className="row total">
						{tareas.length} Total de Tareas
					</div>
				</div>
			</div>
			<div
				className="d-flex justify-content-center"
				style={homeStyle.footer}>
				Nota: Puedes eliminar una tarea haciendo clic sobre ella
			</div>
		</React.Fragment>
	);
};

export default Home;
