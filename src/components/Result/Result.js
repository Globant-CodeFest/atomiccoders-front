export function Result(props) {
  return (
    <div className="result">
        <h2 className="result__title"> Aqui vamos a presentar los resultados</h2>
      <p className="result__text">
        {props.result}
      </p>
    </div>
  );
}