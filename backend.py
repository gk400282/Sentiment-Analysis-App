import re
import sys
import nltk
from googletrans import Translator
from nltk import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from nltk.stem import WordNetLemmatizer
from nltk.sentiment.vader import SentimentIntensityAnalyzer


translator = Translator(service_urls=['translate.google.co.in'])
stemmer= PorterStemmer()
stop = set(stopwords.words('english'))
lemmatizer=WordNetLemmatizer()
sid = SentimentIntensityAnalyzer()

def main(input):
	print(translator.translate(input, dest='en').text)
	scores = sid.polarity_scores(translator.translate(input, dest='en').text)
	print(scores)
	return scores

if __name__ == '__main__':
	# main(sys.argv[0])
	main(input())