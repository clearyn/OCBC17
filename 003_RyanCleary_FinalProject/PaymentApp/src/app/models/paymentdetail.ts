export interface PaymentDetail {
    paymentDetailId: number;
    cardOwnerName: string;
    cardNumber: string;
    expirationDate: string;
    securityCode: string;
};

export interface PaymentDetailForm {
    cardOwnerName: string;
    cardNumber: string;
    expirationDate: string;
    securityCode: string;
};