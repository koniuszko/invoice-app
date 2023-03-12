import styled from "styled-components";

import format from "date-fns/format";
import {useWindowWidth} from "@react-hook/window-size";

const PreviewInvoiceWrapper = styled.div`
  width: 330px;
  padding: 24px;
  margin: 32px 0 145px;
  background-color: ${({theme}) => theme.colors.box};
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 34px 75px 126px 47px 1fr;
  grid-template-areas: "title title" "adress adress" "date client" "email email" "items items";
  gap: 30px 0;
  box-shadow: 0 4px 8px 2px rgb(0, 0, 0, 0.15);

  p {
    font-size: 12px;
    font-weight: normal;
    line-height: 15px;
    letter-spacing: 0.25px;
    color: ${({theme}) => theme.colors.previewText};
  }

  h2 {
    font-size: 15px;
    font-weight: bold;
    line-height: 20px;
    letter-spacing: 0.31px;
    color: ${({theme}) => theme.colors.primaryText};
  }

  h3 {
    margin: 12px 0 8px;
    font-size: 15px;
    font-weight: bold;
    line-height: 20px;
    letter-spacing: 0.31px;
    color: ${({theme}) => theme.colors.primaryText};
  }

  .invoice-title {
    grid-area: title;

    &-purple {
      color: #7e88c3;
    }
  }

  .invoice-adress {
    grid-area: adress;
  }

  .invoice-date {
    grid-area: date;

    &-payment {
      margin-top: 25px;
    }
  }

  .invoice-email {
    grid-area: email;
  }

  .invoice-items {
    grid-area: items;
    background-color: ${({theme}) => theme.colors.itemsBox};
    border-radius: 8px;
    padding: 24px 0 0;
    width: 280px;
    overflow: hidden;

    &-item {
      padding: 0 24px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h4 {
        font-size: 12px;
        font-weight: bold;
        line-height: 15px;
        letter-spacing: 0.25px;
        color: ${({theme}) => theme.colors.primaryText};
      }

      p {
        margin-top: 8px;
        font-size: 12px;
        font-weight: bold;
        line-height: 15px;
        letter-spacing: 0.25px;
        color: ${({theme}) => theme.colors.inputText};
      }
    }

    &-summary {
      padding: 31px 24px;
      background-color: ${({theme}) => theme.colors.totalBox};
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;

      p {
        font-size: 11px;
        font-weight: normal;
        line-height: 18px;
        letter-spacing: 0.23px;
        color: #fff;
      }

      h2 {
        font-size: 20px;
        font-weight: bold;
        line-height: 32px;
        letter-spacing: 0.42px;
        color: #fff;
      }
    }
  }

  @media (min-width: 768px) {
    width: 688px;
    padding: 32px;
    margin: 24px 0 0;
    background-color: ${({theme}) => theme.colors.box};
    border-radius: 8px;
    display: grid;
    grid-template-columns: 196px 196px 1fr;
    grid-template-rows: 75px 130px 1fr;
    grid-template-areas: "title title adress" "date client email"  "items items items";
    gap: 30px 0;
    box-shadow: 0 4px 8px 2px rgb(0, 0, 0, 0.15);

    h2 {
      font-size: 16px;
    }

    .invoice-address {
      text-align: right;
    }

    .invoice-date {
      &-payment {
        margin-top: 32px;
      }
    }

    .invoice-items {
      padding: 32px 0 0;
      width: 624px;
      position: relative;

      &-header {
        padding: 0 32px;
        display: grid;
        grid-template-columns: 276px 30px 118px 137px;

        &-price {
          text-align: right;
        }

        &-total {
          text-align: right;
        }
      }

      &-item {
        margin-top: 32px;
        padding: 0 32px 0;
        display: grid;
        grid-template-columns: 1fr 137px;

        p {
          margin-top: 0;
          font-size: 12px;
          font-weight: bold;
          line-height: 15px;
          letter-spacing: 0.25px;
          color: ${({theme}) => theme.colors.previewText};
        }


        &-title {
          display: grid;
          grid-template-columns: 276px 30px 118px;

          &-qty {
            text-align: center;
          }

          &-price {

            text-align: right;
          }
        }

        &-total {
          text-align: right;
        }
      }


      &-summary {
        margin-top: 32px;
        padding: 32px;

        h2 {
          font-size: 24px;
          letter-spacing: 0.5px;
        }
      }
    }
  }
  @media (min-width: 1440px) {
    width: 730px;
    padding: 48px;

    .invoice-items {
      width: 634px;

      &-header {
        grid-template-columns: 276px 30px 128px 137px;
      }

      &-item {
        &-title {
          grid-template-columns: 276px 30px 128px;
        }
      }
    }
  }
`;

function PreviewInvoice({invoice}) {
    const width = useWindowWidth();
    const totalSummary = (list) => {
        let summary = 0;
        list.map((item) => {
            summary = summary + item.total;
        });
        return summary.toFixed(2);
    };
    return (
        <PreviewInvoiceWrapper>
            <div className="invoice-title">
                <h2>
                    <span className="invoice-title-purple">#</span>
                    {invoice._id.slice(-6)}
                </h2>
                <p>{invoice.project_description}</p>
            </div>
            <div className="invoice-address">
                <p>{invoice.street}</p>
                <p>{invoice.city}</p>
                <p>{invoice.postcode}</p>
                <p>{invoice.country}</p>
            </div>
            <div className="invoice-date">
                <div className="invoice-date-create">
                    <p>Invoice Date</p>
                    <h3>{format(new Date(invoice.invoice_date), "dd MMM yyyy")}</h3>
                </div>
                <div className="invoice-date-payment">
                    <p>Payment Due</p>
                    <h3>{format(new Date(invoice.payment_date), "dd MMM yyyy")}</h3>
                </div>
            </div>
            <div className="invoice-client">
                <p>Bill To</p>
                <h3>{invoice.client_name}</h3>
                <p>{invoice.client_street}</p>
                <p>{invoice.client_city}</p>
                <p>{invoice.client_postcode}</p>
                <p>{invoice.client_country}</p>
            </div>
            <div className="invoice-email">
                <p>Sent to</p>
                <h3>{invoice.client_email}</h3>
            </div>
            <div className="invoice-items">
                {width >= 768 ?
                    <div className="invoice-items-header">
                        <p className="invoice-items-header-name">Item Name</p>
                        <p className="invoice-items-header-qty">Qty.</p>
                        <p className="invoice-items-header-price">Price</p>
                        <p className="invoice-items-header-total">Total</p>
                    </div> : null}
                {invoice.item_list.map((item) => (
                    <div
                        className="invoice-items-item"
                        key={item._id}
                    >
                        <div className="invoice-items-item-title">
                            <h4 className="invoice-items-item-title-name">{item.item_name}</h4>
                            {width >= 768 ? <> <p className="invoice-items-item-title-qty">
                                {item.quantity}
                            </p>
                                <p className="invoice-items-item-title-price">
                                    $ {item.price.toFixed(2)}
                                </p></> : <p>
                                {item.quantity} x $ {item.price.toFixed(2)}
                            </p>}
                        </div>
                        <h4 className="invoice-items-item-total">$ {item.total.toFixed(2)}</h4>
                    </div>
                ))}
                <div className="invoice-items-summary">
                    <p>Grand Total</p>
                    <h2>$ {totalSummary(invoice.item_list)}</h2>
                </div>
            </div>
        </PreviewInvoiceWrapper>
    );
}

export default PreviewInvoice;
