package eviden.fs223.auth.Signature.create;

import java.security.*;
import java.util.Base64;
import java.util.Scanner;

public class CreateSignature {

    private KeyPairGenerator keyPairGenerator;
    private KeyPair keyPair;
    private Signature signature;
    private PrivateKey Privatekey;
    private PublicKey PublicKey;

    public CreateSignature() throws NoSuchAlgorithmException, InvalidKeyException, SignatureException {
        this.keyPairGenerator = KeyPairGenerator.getInstance("RSA");
        this.keyPairGenerator.initialize(2048);
        this.keyPair = keyPairGenerator.generateKeyPair();
        this.signature = Signature.getInstance("SHA256withRSA");
    }

    public PrivateKey getPrivateKey() {
        return keyPair.getPrivate();
    }

    public PublicKey getPublicKey() {
        return keyPair.getPublic();
    }

    public byte[] generateSignature(String message) throws InvalidKeyException, SignatureException {
        signature.initSign(getPrivateKey());
        byte[] bytes = message.getBytes();
        signature.update(bytes);
        byte[] finalSignature = signature.sign();
        return finalSignature;
    }

    public String convertSignature(byte[] signature) {
        return new String(Base64.getEncoder().encode(signature));
    }

    public String convertPublicKey(byte[] publicKey) {
        return new String(Base64.getEncoder().encode(publicKey));
    }


    
    /*
     * public static void main(String[] args) {
     * try (Scanner scanner = new Scanner(System.in)) {
     * // generate key pair
     * CreateSignature createSignature = new CreateSignature();
     * System.out.println("Private key: \n" + createSignature.getPrivateKey());
     * System.out.println("Public key: \n" + createSignature.getPublicKey());
     * 
     * // sign message
     * System.out.println("Enter message to sign: ");
     * String message = scanner.nextLine();
     * byte[] signature = createSignature.generateSignature(message);
     * System.out.println("Signature: \n" + new String(signature));
     * 
     * // convert signature to string
     * String signatureString = createSignature.convertSignature(signature);
     * System.out.println("Signature string: \n" + signatureString);
     * 
     * // convert public key to string
     * String publicKeyString =
     * createSignature.convertPublicKey(createSignature.getPublicKey().getEncoded())
     * ;
     * System.out.println("Public key string: \n" + publicKeyString);
     * 
     * } catch (NoSuchAlgorithmException | InvalidKeyException | SignatureException
     * e) {
     * e.printStackTrace();
     * }
     * }
     */

}
