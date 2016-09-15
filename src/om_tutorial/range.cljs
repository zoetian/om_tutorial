(ns om-tutorial.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(defui HelloWorld
  Object
  (render [this]
    (dom/div nil (get (om/props this) :title))))

(def hello (om/factory HelloWorld))

(js/ReactDOM.render
  ;; CHANGED
  (apply dom/div nil
    (map #(hello {:react-key %
                  :title (str "Hello " %)})
      (range 3)))
  (gdom/getElement "app"))
