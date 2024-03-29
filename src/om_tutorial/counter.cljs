(ns om-tutorial.core
(:require [goog.dom :as gdom]
          [om.next :as om :refer-macros [defui]]
          [om.dom :as dom]))

(def app-state (atom {:count 0}))

(defui Counter
    Object
    (render [this]
        (let [{:keys [count]} (om/props this)]
            (dom/div nil
                (dom/span nil (str "Count: " count))
                (dom/button
                 #js {:onClick
                        (fn [e]
                            (swap! app-state update-in [:count] inc))}
                 "Click me!")))))

 (def reconciler
    (om/reconciler {:state app-state}))

 (om/add-root! reconciler
    Counter (gdom/getElement "app"))

    ;; the add-root takes a reconciler, a root class and a DOM element
    ;; unlike ReactDOM.render, we don't instantiate the component
    ;; The reconciler will do this for us
    ;; As it may need to request data from an end point first







