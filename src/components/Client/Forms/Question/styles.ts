import styled from 'styled-components'

export const TitleForm = styled.h2`
  font-size: 35px;
  text-align: center;
  color: ${(props) => props.theme.blue};
  margin-top: 60px;
  margin-bottom: 30px;
  font-weight: bold;
`

export const Form = styled.form`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 50px;
  background: white;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
  padding: 40px 50px;
  border-radius: 3px;
  min-height: 500px;

  @media (max-width: 850px) {
    margin: 0 30px;
  }

  section {
    margin-top: 30px;

    input[type='number'] {
      padding: 5px 20px;
      width: 100%;
      background: ${(props) => props.theme.white};
      color: ${(props) => props.theme.lightDark};
      font-size: 24px;
      border: 1px solid ${(props) => props.theme.greyOpacity};
      font-weight: bold;
      border-radius: 3px;
    }

    input[type='text'] {
      padding: 10px 20px;
      width: 100%;
      background: ${(props) => props.theme.white};
      color: ${(props) => props.theme.lightDark};
      font-size: 19px;
      border: 1px solid ${(props) => props.theme.greyOpacity};
      font-weight: bold;
      border-radius: 3px;
    }
  }
`

export const CheckContainer = styled.div`
  display: flex;
  margin-top: 20px;

  label {
    margin-left: 5px;
    font-size: 19px;
    color: ${(props) => props.theme.lightDark};
    line-height: 20px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 30px;
    color: ${(props) => props.theme.blue};
    margin-top: 25px;
    margin-right: 10px;
    font-weight: bold;
  }

  > img {
    max-width: 200px;
    min-width: 200px;
    width: 200px;
  }
`

export const Title = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.lightDark};
  margin-top: 70px;
  font-weight: bold;
`

export const Resume = styled.p`
  font-size: 17px;
  color: ${(props) => props.theme.grey};
  margin-top: 10px;
`

export const Submit = styled.button`
  border-radius: 5px;
  margin-top: 50px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.blue};
  text-align: center;
  padding: 10px;
  width: 100%;
  max-width: 250px;
  font-size: 19px;
  border: none;
  cursor: pointer;
`

export const RadioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 25px;
  }

  label {
    padding-left: 5px;
  }

  main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @supports (-webkit-appearance: none) or (-moz-appearance: none) {
      input[type='radio'] {
        --active: #275efe;
        --active-inner: #fff;
        --focus: 2px rgba(39, 94, 254, 0.3);
        --border: #bbc1e1;
        --border-hover: #275efe;
        --background: #fff;
        --disabled: #f6f8ff;
        --disabled-inner: #e1e6f9;
        -webkit-appearance: none;
        -moz-appearance: none;
        height: 21px;
        outline: none;
        display: inline-block;
        vertical-align: top;
        position: relative;
        margin: 0;
        cursor: pointer;
        border: 1px solid var(--bc, var(--border));
        background: var(--b, var(--background));
        transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
        &:after {
          content: '';
          display: block;
          left: 0;
          top: 0;
          position: absolute;
          transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s);
        }
        &:checked {
          --b: var(--active);
          --bc: var(--active);
          --d-o: 0.3s;
          --d-t: 0.6s;
          --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
        }
        &:disabled {
          --b: var(--disabled);
          cursor: not-allowed;
          opacity: 0.9;
          &:checked {
            --b: var(--disabled-inner);
            --bc: var(--border);
          }
          & + label {
            cursor: not-allowed;
          }
        }
        &:hover {
          &:not(:checked) {
            &:not(:disabled) {
              --bc: var(--border-hover);
            }
          }
        }
        &:focus {
          box-shadow: 0 0 0 var(--focus);
        }
        &:not(.switch) {
          width: 21px;
          &:after {
            opacity: var(--o, 0);
          }
          &:checked {
            --o: 1;
          }
        }
        & + label {
          font-size: 14px;
          line-height: 21px;
          display: inline-block;
          vertical-align: top;
          cursor: pointer;
          margin-left: 4px;
        }
      }

      input[type='radio'] {
        border-radius: 50%;

        &:after {
          width: 19px;
          height: 19px;
          border-radius: 50%;
          background: var(--active-inner);
          opacity: 0;
          transform: scale(var(--s, 0.7));
        }

        &:checked {
          --s: 0.5;
        }
      }
    }
  }
`

export const ErrorContainer = styled.div`
  margin-top: 20px;
  margin-bottom: -15px;
`
