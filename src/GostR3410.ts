import * as _ from 'lodash';
import { GostBase, IGostEncrypted } from './GostBase';
import { IKeyAsymmetric } from '@ts-core/common';

export class GostR3410 {
    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static ALGORITHM = 'GOST R 34.10';

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public static nonce(): string {
        return GostBase.nonce();
    }

    public static async keys(): Promise<IKeyAsymmetric> {
        return GostBase.keys(GostR3410.ALGORITHM, ['sign', 'verify']);
    }

    public static async sign(message: string, privateKey: string): Promise<string> {
        return GostBase.sign(GostR3410.ALGORITHM, message, privateKey);
    }

    public static async verify(message: string, signature: string, publicKey: string): Promise<boolean> {
        return GostBase.verify(GostR3410.ALGORITHM, message, signature, publicKey);
    }

    public static async encrypt(message: string, senderPrivateKey: string, receiverPublicKey: string, nonce: string): Promise<IGostEncrypted> {
        return GostBase.encrypt(GostR3410.ALGORITHM, message, senderPrivateKey, receiverPublicKey, nonce);
    }

    public static async decrypt(message: IGostEncrypted, receiverPrivateKey: string, senderPublicKey: string, nonce: string): Promise<string> {
        return GostBase.decrypt(GostR3410.ALGORITHM, message, receiverPrivateKey, senderPublicKey, nonce);
    }
}
