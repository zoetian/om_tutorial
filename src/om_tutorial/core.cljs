(ns om-tutorial.core
	(:require [goog.dom :as gdom]
			  [om.next :as om :refer-macros [defui]]
			  [om.dom :as dom]))

(defui HelloWorld
	Object
	(render [this]
	(dom/div nil "Hello World!")))

(def hello (om/factory HelloWorld))

(js/ReactDOM.render (hello) (gdom/getElement "app"))