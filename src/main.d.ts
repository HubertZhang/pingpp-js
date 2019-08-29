declare module "pingpp-js" {
    interface CallbackError {
        msg: string;
        extra?: string;
    }

    type PaymentCallback = (status: "success" | "fail" | "cancel", err: CallbackError | null) => void

    type URLReturnCallback = (err: CallbackError | null, url: string) => void;

    type Channel = (
        "alipay_lite" | "alipay_pc_direct" | "alipay_wap" | "bfb_wap" | "cb_alipay_pc_direct" |
        "cb_alipay_wap" | "cb_wx_pub" | "ccb_qr" | "cmb_pc_qr" | "cmb_wallet" | "cp_b2b" |
        "isv_wap" | "jdpay_wap" | "paypal" | "qpay_pub" | "upacp_b2b" | "upacp_pc" | "upacp_wap" |
        "wx_lite" | "wx_pub" | "wx_wap" | "yeepay_wap"
    )

    interface SDK {
        createPayment(charge: any, callback?: PaymentCallback): void;
        setAPURL(url: string): void;
        setUrlReturnCallback(callback: URLReturnCallback, channels: Channel[]): void;
        signAgreement(agreement: any, callback: PaymentCallback): boolean;
    }

    var instance: SDK;

    export = instance;
}