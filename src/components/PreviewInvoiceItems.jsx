import styled from "styled-components";
import {useWindowWidth} from "@react-hook/window-size";

const InvoiceItemsWrapper = styled.div`
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
    .invoice-items {
      padding: 32px 0 0;
      width: 624px;
      display: grid;
      grid-template-columns: 196px 196px 1fr;
      grid-template-rows: 75px 130px 1fr;
      grid-template-areas: "title title adress" "date client email"  "items items items";
      gap: 30px 0;

      &-header {
      }


      &-item {
        padding: 0 32px 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;

      }

      &-summary {
        padding: 32px;

        h2 {
          font-size: 24px;
          letter-spacing: 0.5px;
        }
      }
    }
  }
`

function PreviewInvoiceItems({invoice, totalSummary}) {
    const width = useWindowWidth();

    return (
        <InvoiceItemsWrapper>
            <div className="invoice-items-header">
                <p>Item Name</p>
                <p>Qty.</p>
                <p>Price</p>
                <p>Total</p>
            </div>
            {invoice.item_list.map((item) => (
                <div
                    className="invoice-items-item"
                    key={item._id}
                >
                    <div className="invoice-items-item-title">
                        <h4>{item.item_name}</h4>
                        <p>
                            {item.quantity} x $ {item.price.toFixed(2)}
                        </p>
                    </div>
                    <h4>$ {item.total.toFixed(2)}</h4>
                </div>
            ))}
            <div className="invoice-items-summary">
                <p>Grand Total</p>
                <h2>$ {totalSummary(invoice.item_list)}</h2>
            </div>

        </InvoiceItemsWrapper>
    )

}

export default PreviewInvoiceItems