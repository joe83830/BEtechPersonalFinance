# we import the Twilio client from the dependency we just installed
from twilio.rest import Client

class Reminder:

    def __init__(self):
        self.time = None
        self.cur_coffee_expense = 0
        self.visual_url = None

    def get_time(self):
        self.time = None

    def get_coffee_total(self):
        self.cur_coffee_expense = 0

    def send_message(self):
        send_sms(self.visual_url)

def send_sms(url):
# the following line needs your Twilio Account SID and Auth Token
    client = Client("ACd47945c66b32e399752137f55e3713e5", "ce1df334cf30a9e3016e909112ff60f0")

    # change the "from_" number to your Twilio number and the "to" number
    # to the phone number you signed up for Twilio with, or upgrade your
    # account to send SMS to any phone number
    client.messages.create(to="+13475932734",
                           from_="+16463628568",
                           body="https://betechpersonalspending.netlify.com")


if __name__ == "__main__":
    rm = Reminder()
    rm.get_time()

    # Periodically
    rm.get_coffee_total()

    # Everyday at self.time
    rm.send_message()