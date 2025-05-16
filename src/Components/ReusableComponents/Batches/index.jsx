import "./Batch.css";

const Batch = (props) => {
  const { className = "", content = "", batchType = "" } = props;

  return (
    <div className={`batch-container ${batchType}`}>
      <span className="batch-content">{content}</span>
    </div>
  );
};

export default Batch;
