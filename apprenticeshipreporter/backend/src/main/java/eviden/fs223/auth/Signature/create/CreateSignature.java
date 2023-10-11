package eviden.fs223.auth.Signature.create;

import java.security.*;
import java.sql.Date;
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

    public byte[] generateSignature(String message, byte[] timestamp) throws InvalidKeyException, SignatureException {
       
        signature.initSign(getPrivateKey());
       
       
        byte[] bytes = message.getBytes();
        byte[] combinedBytes = new byte[bytes.length + timestamp.length];
        System.arraycopy(bytes, 0, combinedBytes, 0, bytes.length);
        System.arraycopy(timestamp, 0, combinedBytes, bytes.length, timestamp.length);

        signature.update(combinedBytes);
        byte[] finalSignature = signature.sign();
        return finalSignature;
    }

    public String convertSignature(byte[] signature) {
        return new String(Base64.getEncoder().encode(signature));
    }

    public String convertPublicKey(byte[] publicKey) {
        return new String(Base64.getEncoder().encode(publicKey));
    }


    private static byte[] generateTimestamp() {
        // Get the current system time as a timestamp
        long timestampMillis = System.currentTimeMillis();
        Date timestampDate = new Date(timestampMillis);
        String timestampString = timestampDate.toString();
        return timestampString.getBytes();
    }
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            // generate key pair
            CreateSignature createSignature = new CreateSignature();
            System.out.println("Private key: \n" + createSignature.getPrivateKey());
            System.out.println("Public key: \n" + createSignature.getPublicKey());

              // Generate a timestamp 
              byte[] timestamp = generateTimestamp();
            // sign message
            System.out.println("Enter message to sign: ");
            String message = scanner.nextLine();
            byte[] timestampedSignature = createSignature.generateSignature(message, timestamp);
            System.out.println("Timestamped Signature: \n" + new String(timestampedSignature));

            // convert signature to string
            String signatureString = createSignature.convertSignature(timestampedSignature);
            System.out.println("Signature string: \n" + signatureString);

            // convert public key to string
            String publicKeyString = createSignature.convertPublicKey(createSignature.getPublicKey().getEncoded());
            System.out.println("Public key string: \n" + publicKeyString);

        } catch (NoSuchAlgorithmException | InvalidKeyException | SignatureException e) {
            e.printStackTrace();
        }
    }

}
