import base64
from hashlib import sha256

def encrypt(text):
    key = sha256(b"TalentFlowSecret").digest()
    encoded = base64.b64encode(text.encode('utf-8'))
    return encoded.decode('utf-8')

if __name__ == "__main__":
    msg = "Confidential Freelancer Data"
    cipher = encrypt(msg)
    print(f"Encrypted: {cipher}")
