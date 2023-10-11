function ClearAllList({ getPersonList }) {
  const handleClearButton = () => {
    console.log(getPersonList);
  };
  return (
    <div>
      <button onClick={handleClearButton}></button>
    </div>
  );
}

export default ClearAllList;
