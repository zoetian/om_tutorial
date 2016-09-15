;; to reduce the coupling btw the counter and global state
;; i.e. counter directly tied to the state atom
;; we use Client server architecture instead

;; Note: the OM tends to move all statement management into a router abs
;; while the React tends to mix control logic into components

;; Components do NOT nutate application state
;; instead, the component request application state transitions(mutations)
;; and the ROUTER WILL APPLY THE STATE CHANGES

;; fully transparent synchronization

;; for parsing

;; [{:todos/list [:todo/created :todo/title]}]

;; [(todo/update {id: 0- :todo/title "Get Orange Juice"})]
