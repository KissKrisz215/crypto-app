import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.3rem;
`;

export const CurrencyTable = styled.div`
  background-color: ${(props) => props.theme.inputMode};
  border-radius: 0.4rem;
  overflow: hidden;
  width: 100%;
  max-width: 290px;
  display: flex;
`;

export const CurrencySymbol = styled.div`
  background-color: #06d554;
  width: 100%;
  max-width: 60px;
  padding:0.5rem; 0rem;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:0.8rem;
`;

export const CurrencyInput = styled.input`
  border: 0;
  font-size: 0.8rem;
  width: 100%;
  height: 100%;
  background-color: transparent;
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;

export const DollarSign = styled.div`
  font-size: 0.7rem;
  display: flex;
  height: 100%;
  align-items: center;
  margin-right: 0.1rem;
`;

export const ExchangeIcon = styled.img`
  filter: ${(props) => props.theme.themeIcon};
  cursor: pointer;
`;

export const CurrencyInputContainer = styled.div`
  display: flex;
  padding: 0 0.7rem;
  position: relative;
  background-color: ${(props) => props.theme.inputMode};
`;
