class Payment_Status:
    pending = 1
    processing = 2
    paid = 3
    cancelled = 4

    STATUS = (
        ('در حال بررسی', pending),
        ('در حال ارسال', processing),
        ('پرداخت شده', paid),
        ('لغو شده', cancelled),
    )
