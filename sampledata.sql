USE cruisin66_dev;

INSERT INTO users (username, email, firstname, lastname, password, photoAvatar, createdat, updatedat)
VALUES ('slee', 'soph915@gmail.com', 'sophia', 'lee', 'password', 'photoavatarurl', '2018-08-14 12:32:00', '2018-08-14 12:32:00');

INSERT INTO categories (name, createdat, updatedat)
VALUES ('Nature', '2018-08-14 12:32:00', '2018-08-14 12:32:00');

INSERT INTO categories (name, createdat, updatedat)
VALUES ('Food', '2018-08-14 12:32:00', '2018-08-14 12:32:00');

INSERT INTO itineraries (name, description, createdat, updatedat, categoryId, userId)
VALUES ('Pacific Coast Highway', 'beautiful spots along the famous Pacific Coast highway', '2018-08-14 12:32:00', '2018-08-14 12:32:00', 1, 1);

INSERT INTO stops (name, longitude, latitude, description, avgRating, address, zipcode, audiofile, createdat, updatedat, photo)
VAlues ('McWay Falls', 36.157, -121.672, 'Amazing 80 ft waterfall, easy 1/2 mile trail', 5, 'California 93920', '93920', 'exaudiofile', '2018-08-14 12:32:00', '2018-08-14 12:32:00', 'https://s3-media4.fl.yelpcdn.com/bphoto/k5_QWpWZ_TOJHI0kiC2YgQ/180s.jpg');

INSERT INTO stops (name, longitude, latitude, description, avgRating, address, zipcode, audiofile, createdat, updatedat, photo)
VAlues ('Point Lobos', 36.157, -121.672, 'Cypress Grove Trail is my favorite here!', 5, 'California 93920', '93920', 'exaudiofile', '2018-08-14 12:32:00', '2018-08-14 12:32:00', 'https://www.californiabeaches.com/wp-content/uploads/2014/09/Point-Lobos-State-Natural-Reserve-SNR.jpg');

SELECT id into @stopid from stops where id =1;
SELECT id into @itineraryid from itineraries where id =1;
INSERT INTO itinerarystops (createdat, updatedat, itineraryid, stopid)
VALUES ('2018-08-14 12:32:00', '2018-08-14 12:32:00', @itineraryid, @stopid);

INSERT INTO itinerariescomments (text, rating, createdat, updatedat, itineraryId, userId)
VALUES ('this tour was the best, highly recommend!', '4', '2018-08-14 12:32:00', '2018-08-14 12:32:00', 1, 1);

INSERT INTO itineraryphotos (url, description, createdat, updatedat, itineraryid)
VALUES ('https://i0.wp.com/wearetravelgirls.com/wp-content/uploads/2016/10/big-sur-pacific-coast-highway.jpg', 'view of bixby bridge', '2018-08-14 12:32:00', '2018-08-14 12:32:00', 1);

INSERT INTO stopphotos (url, description, createdat, updatedat, stopid)
VALUES ('https://i2.wp.com/wearetravelgirls.com/wp-content/uploads/2016/10/california-roadtrip-we-are-travel-girls-2.jpg', 'mcway falls', '2018-08-14 12:32:00', '2018-08-14 12:32:00', 1);

INSERT INTO itineraryphotos (url, description, createdat, updatedat, itineraryid)
VALUES ('https://i0.wp.com/wearetravelgirls.com/wp-content/uploads/2016/10/big-sur-pacific-coast-highway.jpg', 'view of bixby bridge', '2018-08-14 12:32:00', '2018-08-14 12:32:00', 1);

INSERT INTO stopscomments (text, rating, createdat, updatedat, stopId, userId)
VALUES ('these falls were so gorgeous', '5', '2018-08-14 12:32:00', '2018-08-14 12:32:00', 1, 1);


