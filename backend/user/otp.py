import pyotp


def sendToken():
    totp = pyotp.TOTP(pyotp.random_base32(), interval=60)
    
    otp = totp.now()

    return otp
