import styled from "@emotion/styled";

export const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 60px);
  background: #fff;
  border: 2px solid #979797;
  box-shadow: 24;
  border-radius: 8px;
  display: flex;
  padding: 16px;
  flex-wrap: wrap;
  gap: 8px;
  box-szing: border-box;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f2f2f2;
  padding: 4px 8px;
  border-radius: 8px;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
`;

export const Label = styled.label`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #131a297a;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;

  ::placeholder {
    color: #000;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
`;
