# import csv

# # field names
# fields = ['Demo', 'Demo', 'Demo', 'Demo']

# # data rows of csv file
# rows = [['Demo', 'Demo', 'Demo', 'Demo']]

# # name of csv file
# filename = "features_detected.csv"

# # writing to csv file
# with open(filename, 'w') as csvfile:
#     # creating a csv writer object
#     csvwriter = csv.writer(csvfile)

#     # writing the fields
#     csvwriter.writerow(fields)

#     # writing the data rows
#     csvwriter.writerows(rows)

import requests;
r = requests.post('http://localhost:3000/', json={"foo": "bar", "ka": "pa"}) 