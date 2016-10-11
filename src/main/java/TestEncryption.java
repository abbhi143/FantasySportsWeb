import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;

import com.sun.xml.internal.messaging.saaj.packaging.mime.util.BASE64DecoderStream;


public class TestEncryption {

	/**
	 * @param args
	 */
	private static Cipher ecipher;
    private static Cipher dcipher;
    private static SecretKey key;
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		  try {
			key = KeyGenerator.getInstance("DES").generateKey();
			ecipher = Cipher.getInstance("DES");
	        dcipher = Cipher.getInstance("DES");
	        // initialize the ciphers with the given key
	        ecipher.init(Cipher.ENCRYPT_MODE, key);
	        dcipher.init(Cipher.DECRYPT_MODE, key);
	        //String encrypted = encrypt(s);
	        System.out.println("Madhu");
	        
	        String decrypted = decrypt("YXNkZmFzZGZhc2Rm");
	        System.out.println("<br/>UserName: "+"Sagar");
	        System.out.println("<br/>Password: "+decrypted);
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvalidKeyException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NoSuchPaddingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	        
	}
	public static String decrypt(String str) 
    {
		  try 
		  {
			  // decode with base64 to get bytes			
			  byte[] dec = BASE64DecoderStream.decode(str.getBytes("UTF-8"));
			  byte[] utf8 = dcipher.doFinal(dec);
			  // create new string based on the specified charset
			  return new String(utf8, "UTF-8");
		  }
		  catch (Exception e) 
		  {
		    e.printStackTrace();
		  }
		  return null;
    }
	
}
