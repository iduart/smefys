import styled from 'styled-components';

export const Page = styled.div`
  font-family: arial;
  color: #7c7c7c;
`
export const ContentBody = styled.div`
  padding: 0 1rem;
  margin-top: 1rem;
`

export const ContentHeader = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-top: 0.8rem;

  .title {
    color: #ff8533;
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
  }

  .order-date {
    margin-top: 0.5rem;

    span {
      padding-bottom: 0.4rem;
      text-transform: capitalize;
    }

    span:nth-child(1) {
      border-bottom: solid #de5b00 2px;
    }

    span:nth-child(2) {
      border-bottom: solid #3a9517 2px;
    }

    span:nth-child(3) {
      border-bottom: solid #b3b3b3 2px;
    }
  }

  .total-payment {
    margin-top: 1rem;

    .total-payment-value {
      font-weight: bold;
      text-align: center;
    }
  }
`