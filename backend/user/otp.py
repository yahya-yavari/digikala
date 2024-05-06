import pyotp


def sendToken():
    totp = pyotp.TOTP(pyotp.random_base32(), interval=60)
    
    otp = totp.now()
    
    print(f"The OTP is : {otp}")

    return otp
