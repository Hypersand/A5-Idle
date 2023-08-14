import DaumPostcode from "react-daum-postcode";
function Address({ onComplete }) {
  return (
    <div>
      <DaumPostcode onComplete={onComplete} />
    </div>
  );
}

export default Address;
