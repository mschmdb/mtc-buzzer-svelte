export default function(node, length) {
	const total = node.getTotalLength()
	node.style.strokeDasharray = `${total * length} ${total * (1 - length)}`
	
	return {
		update(length) {
			node.style.strokeDasharray = `${total * length} ${total * (1 - length)}`
		}
	}
}